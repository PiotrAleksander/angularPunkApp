import { BEERS } from './../../mocks';
import { Beer } from './../../models/index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css'],
})
export class BeersComponent implements OnInit {
  beers: Beer[] = BEERS;
  selectedBeer: Beer;

  constructor() {}

  ngOnInit(): void {}

  selectBeer(beer: Beer): void {
    this.selectedBeer = beer;
  }
}
