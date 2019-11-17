import { Photo } from './../models/photo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  readonly urlPhotos: string =  'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  public getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.urlPhotos);
  }
}



/*
  public getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.urlPhotos);
  }
*/
