import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Photo } from 'src/app/core/models/Photo';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnChanges {
  @Input() photos: Photo[] = [];
  filteredPhotos: Photo[] = [];
  page = 1;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 50, 100];
  cols = 5;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.page = 1;
    this.pageSize = 10;
    this.filteredPhotos = this.photos.length > 0 ? this.photos.slice(0, this.pageSize) : [];
  }

  onPageChange(event): void {
    this.filteredPhotos = this.photos.slice(event.pageIndex * event.pageSize, (event.pageIndex + 1) * event.pageSize);
  }

}
