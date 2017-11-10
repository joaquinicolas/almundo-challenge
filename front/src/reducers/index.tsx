
import { VisibilityActions } from '../actions';
import {Hotel, StoreState} from '../types/index';
import {  SHOW_ALL, FILTERBY_STARS, FILTERBY_NAME } from '../constants/index';


export function visibilityFilter(state: StoreState, action: VisibilityActions): StoreState {
  switch (action.type) {
    case SHOW_ALL:
            return { ...state, hotels: action.payload, visibilityFilter: {filter: SHOW_ALL, payload: ''}}
    default:
      return state;
  }
}