
import * as constants from '../constants';
import {Hotel, StoreState} from '../types/index';
import {Action, ActionCreator, Dispatch} from 'redux';
import {HotelDAO} from '../api/index';

export interface ShowAll {
    type: constants.SHOW_ALLT,
    payload: Hotel[]
}

export interface FilterByName {
    type: constants.FILTERBY_NAMET
    payload: string
}
export interface FilterByStars {
    type: constants.FILTERBY_STARST
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

export const filterByStars = (stars: number, hfetch: HotelDAO) => {
    return (dispatch: Dispatch<ShowAll>): ShowAll => {
        hfetch.getAll()
            .then(value => dispatch(showAll(value)))
    }
}

export const fetchHotels = (hfetch: HotelDAO) => {
    return async (dispatch: Dispatch<VisibilityActions>): Promise<ShowAll> => {
        try{
            const hotels = await hfetch.getAll();
            return dispatch(showAll(hotels));
        }catch (e){}
    };
};