import { BEERS } from './../mocks';
import { Injectable } from '@angular/core';
import { Beer } from '../models';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  private beers: Beer[] = BEERS;

  constructor() {}

  getBeers(): Observable<Beer[]> {
    return of(this.beers);
  }

  getBeer(id: number): Observable<Beer> {
    return of(this.beers.find((beer) => beer.id === id));
  }
}
