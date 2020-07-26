import { Beer } from './../../models/index';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css'],
})
export class BeerDetailsComponent implements OnInit {
  @Input() beer: Beer;

  constructor() {}

  ngOnInit(): void {}
}
