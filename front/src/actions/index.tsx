
import * as constants from '../constants';
import {Hotel, StoreState} from '../types/index';
import {error} from 'util';
import {Action, ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {HotelDAO} from '../api/index';

export interface ShowAll {
    type: constants.SHOW_ALL;
    payload: Hotel[]
}

export interface FilterByName {
    type: constants.FILTERBY_NAME;
    payload: string
}
export interface FilterByStars {
    type: constants.FILTERBY_STARS;
    payload: number
}

export type VisibilityActions = ShowAll | FilterByStars | FilterByName;

export function showAll(hotels: Hotel[]): ShowAll{
    return {
        type: constants.SHOW_ALL,
        payload: hotels
    };
}


// Async redux-thunk
export function filterByName(name: string, hfetch: HotelDAO) {
    return async (dispatch: Dispatch<VisibilityActions>): Promise<ShowAll> => {
        try{
            const hotels = await hfetch.getByName(name);
            return dispatch(showAll(hotels));
        }catch (e){}
    };
}

export function filterByStars(stars: number, hfetch: HotelDAO){
    return async (dispatch: Dispatch<VisibilityActions>): Promise<ShowAll> => {
        try{
            const hotels = await hfetch.getByStars(stars);
            return dispatch(showAll(hotels));
        }catch (e){}
    };
}

export const fetchHotels = (hfetch: HotelDAO) => {
    return async (dispatch: Dispatch<VisibilityActions>): Promise<ShowAll> => {
        try{
            const hotels = await hfetch.getAll();
            return dispatch(showAll(hotels));
        }catch (e){}
    };
}