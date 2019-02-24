import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-page-video-list',
  templateUrl: './page-video-list.component.html',
  styleUrls: ['./page-video-list.component.css']
})
export class PageVideoListComponent implements OnInit {

  public movies;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {}

  getMovies() {
     this.movies = this.moviesService.fetchMovies().then( res => console.log(res));;
  }
}
