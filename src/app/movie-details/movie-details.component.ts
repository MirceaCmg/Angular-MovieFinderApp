import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Object } from '../movie.model'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Object;

  constructor(private router: ActivatedRoute, private _movieService: MovieService) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      let id = params['id'];
      this._movieService.getMovie(id).subscribe(movie => {
        this.movie = movie;
      });
    });
  }

}
