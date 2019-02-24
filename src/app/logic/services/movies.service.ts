import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  async fetchMovies() {
   return await this.http.get(`${environment.moviesURL}/assets/movies.json`).toPromise()
  }
}
