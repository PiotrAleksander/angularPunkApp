import { BeersService } from './../beers.service';
import { Beer } from './../../models/index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css'],
})
export class BeersComponent implements OnInit {
  beers: Beer[];
  selectedBeer: Beer;

  constructor(private beersService: BeersService) {}

  ngOnInit(): void {
    this.beers = this.beersService.getBeers();
  }

  selectBeer(beer: Beer): void {
    this.selectedBeer = beer;
  }
}
