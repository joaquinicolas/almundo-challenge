
import { VisibilityActions } from '../actions';
import {Hotel, StoreState} from '../types/index';
import {  SHOW_ALL, FILTERBY_STARS, FILTERBY_NAME } from '../constants/index';


export function visibilityFilter(state: StoreState, action: VisibilityActions): StoreState {
  switch (action.type) {
    case SHOW_ALL:
        console.log("*** EXECUTING REDUCER SHOW ALL ***")
        console.log("*** RECEIVED ACTION ***. ", action)
        console.log("*** CURRENT STATE ***. ", state)
            return { ...state, hotels: action.payload, visibilityFilter: {filter: SHOW_ALL, payload: ''}}
    case FILTERBY_STARS:

      break;
    case FILTERBY_NAME:

        break;
    default:
      return state;
  }
}