import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-page-video-profile',
  templateUrl: './page-video-profile.component.html',
  styleUrls: ['./page-video-profile.component.css']
})
export class PageVideoProfileComponent implements OnInit {

  public movie;

  constructor(
    private activeRoute: ActivatedRoute,
    private moviesService: MoviesService
  
    ) { }

  async ngOnInit() {
    const routeParams = this.activeRoute.snapshot.params;
    this.movie = await this.moviesService.fetchMoviesById(routeParams.id);
  }
}
