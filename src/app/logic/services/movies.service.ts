import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movies } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies;

  constructor(private http: HttpClient) { }

  fetchMovies() {
   return <Promise<Movies>>this.http.get(`${environment.moviesURL}/assets/data.json`).toPromise();
  }

  async fetchMoviesById(id) {
    this.movies = await this.fetchMovies();
    return this.movies.find(movie => movie.id == id);
  }
}
