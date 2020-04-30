import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class MovieService {
  apikey: string;

  //getting data from server using Jsonp

  constructor(private _jsonp: Jsonp) {
    this.apikey = 'dfd74e4721b392cf451d75540c8fbccb';
  }

  searchMovies(searchStr: string) {
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query=' + searchStr + '&sort_by=popularity.desc&api_key=' + this.apikey)
      .map(res => res.json());
  }

  getMovie(id: string) {
    return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '?callback=JSONP_CALLBACK&api_key=' + this.apikey)
      .map(res => res.json());
  }


}
