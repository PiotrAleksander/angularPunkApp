import { Injectable } from '@angular/core';
import { Beer } from '../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL = 'https://api.punkapi.com/v2/';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  private beers: Beer[];

  constructor(private httpClient: HttpClient) {}

  getBeers(): Observable<Beer[]> {
    return this.httpClient.get<Beer[]>(`${BASE_URL}beers`);
  }
}
