import { Component, OnInit } from '@angular/core';

import { BeersService } from './../beers.service';
import { Beer } from './../../models/index';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css'],
})
export class BeersComponent implements OnInit {
  beers: Beer[];
  displayedColumns: string[] = ['id', 'name', 'tagline'];

  constructor(private beersService: BeersService) {}

  ngOnInit(): void {
    this.beersService.getBeers().subscribe((beers) => (this.beers = beers));
  }
}
