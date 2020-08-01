import { createAction, createReducer, on, props } from '@ngrx/store';
import { Beer, BeersState } from './../../models/index';

const initialBeersState: BeersState = {
  list: [],
  isLoading: false,
  isError: false,
};

export const BEERS_BRANCH = 'BEERS_BRANCH';
export const loadBeers = createAction(`${BEERS_BRANCH} LOAD`);
export const loadBeersSuccess = createAction(
  `${BEERS_BRANCH} LOAD_SUCCESS`,
  props<{ list: Beer[] }>()
);
export const loadBeersError = createAction(`${BEERS_BRANCH} LOAD_ERROR`);

const beersReducer = createReducer(
  initialBeersState,
  on(loadBeers, (state) => ({ ...state, isLoading: true, isError: false })),
  on(loadBeersSuccess, (state, { list }) => ({
    ...state,
    list,
    isLoading: false,
    isError: false,
  })),
  on(loadBeersError, (state) => ({ ...state, isLoading: false, isError: true }))
);

export default (state, action) => beersReducer(state, action);
