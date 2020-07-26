import { BeersService } from './../beers.service';
import { Beer } from './../../models/index';
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
    private beersService: BeersService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const idString = this.activatedRoute.snapshot.paramMap.get('id');
    const id = parseInt(idString, 0);
    this.beersService.getBeer(id).subscribe((beer) => (this.beer = beer));
  }

  onClickBackButton(): void {
    this.location.back();
  }
}
