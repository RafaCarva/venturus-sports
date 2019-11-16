import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../models/album';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  readonly urlAlbuns: string = 'https://jsonplaceholder.typicode.com/albums/';

  constructor(private http: HttpClient) { }

  public getAlbuns(): Observable<Album[]> {
    return this.http.get<Album[]>(this.urlAlbuns)
      .pipe(
      //  tap(console.log)
      );
  }
}
