
import { VisibilityActions } from '../actions';
import {StoreState} from '../types/index';
import {  SHOW_ALL, FILTERBY_STARS, FILTERBY_NAME } from '../constants/index';

export function visibilityFilter(state: StoreState, action: VisibilityActions): StoreState {
  switch (action.type) {
    case SHOW_ALL:
      return { ...state, hotels: []};
    case FILTERBY_STARS:
      return { ...state, hotels: state.hotels.filter(h => h.stars == action.payload) };
    case FILTERBY_NAME:
        return { ...state, hotels:state.hotels.filter(h => h.name.includes(action.payload)) };
    default:
      return state;
  }
}