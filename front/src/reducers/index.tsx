
import { VisibilityFilter } from '../actions';
import { StoreState } from '../types/index';
import {  SHOW_ALL, FILTERBY_STARS, FILTERBY_NAME } from '../constants/index';

export function visibilityFilter(state: StoreState, action: VisibilityFilter): StoreState {
  switch (action.type) {
    case SHOW_ALL:
      return { ...state, hotels: []};
    case FILTERBY_STARS:
      return { ...state, hotels: [] };
    case FILTERBY_NAME:
        return { ...state, hotels:[] };
    default:
      return state;
  }
}