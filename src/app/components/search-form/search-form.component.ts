import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Photo } from 'src/app/core/models/Photo';
import { Rover } from 'src/app/core/models/Rover';
import { NasaService } from 'src/app/core/services/nasa.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchForm: FormGroup;
  rovers: Rover[] = [];
  cameras: string[] = ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM', 'PANCAM', 'MINITES', 'ENTRY'];
  maxSol = 1000;
  loading = false;
  @Output() photos: EventEmitter<Photo[]> = new EventEmitter();

  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      rover: new FormControl('', [Validators.required]),
      sol: new FormControl(this.maxSol, [Validators.required, Validators.min(0), Validators.max(this.maxSol)]),
    });
    if (this.rovers.length === 0) {
      this.nasaService.getRovers()
        .then((rovers: Rover[]) => { this.rovers = rovers; })
        .catch(console.error);
    }
  }

  onSubmit(): void {
    this.loading = true;
    if (this.searchForm.valid) {
      const rover = this.searchForm.get('rover').value;
      const sol = this.searchForm.get('sol').value;
      this.nasaService.getRoverPhotos(rover, sol).then((photos) => {
        this.photos.emit(photos);
      }).catch(console.error)
        .finally(() => {
          this.loading = false;
        });
    }
  }

  setMaxSol(roverName): void {
    const rover = this.rovers.find(({ name }) => name === roverName);
    if (rover.max_sol < 1000) {
      this.searchForm.setValue({
        rover: roverName,
        sol: rover.max_sol,
      });
    }
    this.maxSol = rover.max_sol;
  }

}
