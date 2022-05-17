import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from '../models/Photo';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  API_URL = environment.nasa_api_url;

  constructor(private http: HttpClient) { }

  getRovers(): Observable<any> {
    let params = new HttpParams();
    return this.http.get(`${this.API_URL}`, { params });
  }

  getRoverPhotos(rover: string, sol: number): Promise<Photo[]> {
    let params = new HttpParams();
    params = params.append('sol', sol.toString());

    return new Promise((resolve, reject) => {
      this.http.get(`${this.API_URL}${rover}/photos`, { params }).subscribe(
        (data: { photos: Photo[] }) => resolve(data.photos),
        error => reject(error)
      );
    });
  }

}
