import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Beer, AppState } from './../../models/index';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css'],
})
export class BeersComponent implements OnInit {
  beers: Beer[];
  displayedColumns: string[] = ['id', 'name', 'tagline'];

  constructor(private store: Store<AppState>) {
    this.store
      .pipe(select('beers'))
      .subscribe(({ list }) => (this.beers = list));
  }

  ngOnInit(): void {}
}
