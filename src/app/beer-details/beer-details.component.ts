import { Store, select } from '@ngrx/store';
import { Beer, AppState } from './../../models/index';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css'],
})
export class BeerDetailsComponent implements OnInit {
  beer: Beer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    const idString = this.activatedRoute.snapshot.paramMap.get('id');
    const id = parseInt(idString, 0);
    this.store.pipe(select('beers')).subscribe(({ list }) => {
      this.beer = list.find((beer) => beer.id === id);
    });
  }

  onClickBackButton(): void {
    this.location.back();
  }
}
