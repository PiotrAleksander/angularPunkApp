import { AppState } from './../../models/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadBeers } from '../../store/beers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadBeers());
  }
}
