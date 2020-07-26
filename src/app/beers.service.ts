import { BEERS } from './../mocks';
import { Injectable } from '@angular/core';
import { Beer } from '../models';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  private beers: Beer[] = BEERS;

  constructor() {}

  getBeers(): Beer[] {
    return this.beers;
  }
}
