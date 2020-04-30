import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Object } from "../movie.model"

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  searchStr: string;
  searchRes: Array<Object>;


  constructor(private _movieService: MovieService) { }

  searchMovies() {
    this._movieService.searchMovies(this.searchStr).subscribe(res => {
      // this.searchRes = res.results;
      // this.shuffle(this.searchRes)
      this.searchRes= this.shuffle(res.results)
    });
  }

  ngOnInit(): void {
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

}
