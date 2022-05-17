import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/core/models/Photo';
import { NasaService } from 'src/app/core/services/nasa.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  photos: Photo[] = [];

  constructor() { }

  ngOnInit(): void { }

  showPhotos(photos: Photo[]): void {
    this.photos = photos;
  }

}
