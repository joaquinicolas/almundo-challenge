
import * as constants from '../constants';
import { Hotel, StoreState } from '../types/index';
import { Action, ActionCreator, Dispatch } from 'redux';
import { HotelDAO } from '../api/index';
import { ThunkAction } from 'redux-thunk';

export interface ShowAll {
    type: constants.SHOW_ALLT;
    payload: Hotel[];
}

export interface FilterByName {
    type: constants.FILTERBY_NAMET;
    payload: string;
}
export interface FilterByStars {
    type: constants.FILTERBY_STARST;
    payload: number;
}

export type VisibilityActions = ShowAll;

export function showAll(hotels: Hotel[]): ShowAll {
    return {
        type: constants.SHOW_ALL,
        payload: hotels
    };
}

// Async redux-thunk
// tslint:disable-next-line:no-any
export function filterByName(name: string, hfetch: HotelDAO): any {
    return async (dispatch: Dispatch<VisibilityActions>): Promise<ShowAll> => {
        try {
            const hotels = await hfetch.getByName(name);
            return dispatch(showAll(hotels));
        } catch (e) {}
    };
}
// tslint:disable-next-line:no-any
export const filterByStars = (stars: number, hfetch: HotelDAO): any => {
    return (dispatch: Function) => {
        hfetch.getByStars(stars)
        .then(value => dispatch(showAll(value)));
    };
};
/*
export const filterByStars = (stars: number, hfetch: HotelDAO) => {
    return (dispatch: Dispatch<ShowAll>): ShowAll => {
        hfetch.getAll()
            .then(value => dispatch(showAll(value)));
    };
};*/

// tslint:disable-next-line:no-any
export const fetchHotels = (hfetch: HotelDAO): any => {
    return async (dispatch: Dispatch<VisibilityActions>): Promise<ShowAll> => {
        try {
            const hotels = await hfetch.getAll();
            return dispatch(showAll(hotels));
        } catch (e) {}
    };
};