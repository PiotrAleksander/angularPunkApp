import { BeersService } from './../beers.service';
import { Beer } from './../../models/index';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css'],
})
export class BeersComponent implements OnInit {
  beers: Beer[];

  constructor(private beersService: BeersService) {}

  ngOnInit(): void {
    this.beersService
      .getBeers()
      .pipe(tap((beers) => console.log(beers)))
      .subscribe((beers) => (this.beers = beers));
  }
}
