import { loadBeersError } from './index';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { BeersService } from './../../app/beers.service';
import { BEERS_BRANCH, loadBeersSuccess } from '.';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class BeersEffects {
  constructor(private action$: Actions, private beersService: BeersService) {}

  loadBeers$ = createEffect(() =>
    this.action$.pipe(
      ofType(`${BEERS_BRANCH} LOAD`),
      mergeMap(() =>
        this.beersService.getBeers().pipe(
          map((beers) => loadBeersSuccess({ list: beers })),
          catchError(() => loadBeersError)
        )
      )
    )
  );
}
