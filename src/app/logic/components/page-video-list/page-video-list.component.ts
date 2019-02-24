import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../interfaces/movies.interface';

@Component({
  selector: 'app-page-video-list',
  templateUrl: './page-video-list.component.html',
  styleUrls: ['./page-video-list.component.css']
})
export class PageVideoListComponent implements OnInit {

  public movies: Movies;

  constructor(private moviesService: MoviesService) { }

  async ngOnInit() {
     this.movies = await this.moviesService.fetchMovies();
  }   

  async getMovies() {
    this.movies = await this.moviesService.fetchMovies();
  }
}
