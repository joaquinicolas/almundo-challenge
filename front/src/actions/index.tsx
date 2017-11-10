
import * as constants from '../constants';
import {Hotel, StoreState} from '../types/index';
import {error} from 'util';
import {Action, ActionCreator, Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';

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

export type VisibilityActions = ShowAll | FilterByName | FilterByStars;

export function showAll(hotels: Hotel[]): ShowAll{
    console.log("*** INSIDE showAll Action.  ***", hotels)
    return {
        type: constants.SHOW_ALL,
        payload: hotels
    };
}

export function filterByName(name: string): FilterByName {
    return {
        type: constants.FILTERBY_NAME,
        payload: name
    };
}
export function filterByStars(stars: number): FilterByStars {
    return {
        type: constants.FILTERBY_STARS,
        payload: stars
    };
}

// Async redux-thunk
export const fetchHotels = (hfetch: HotelDAO) => {
    console.log("***** FETCHING HOTELS *****")
    return async (dispatch: Dispatch<VisibilityActions>): Promise<ShowAll> => {
        try{
            const hotels = await hfetch.getAll();
            console.log("*** FETCHED HOTELS: ", hotels, " ***")
            return dispatch(showAll(hotels));
        }catch (e){}
    };
}

export interface HotelDAO {
    getAll(): Promise<Hotel[]>
    getByName(name: string): Promise<Hotel[]>
    getByStars(stars: number): Promise<Hotel[]>
}

export function HotelDAOImpl(): HotelDAO {
    return {
        getAll: ()  =>  new Promise((resolve) => {
            resolve(getMockHotels);
        }),
        getByName: (name: string) => new Promise(resolve => resolve(getMockHotels.filter(h => h.name.includes(name)))),
        getByStars: (stars: number) => new Promise(resolve => resolve(getMockHotels.filter(h => h.stars == stars)))
    };
}


const getMockHotels: Hotel[] = [{
    "id": "249942",
    "name": "Hotel Stefanos",
    "stars": 3,
    "price": 994.18,
    "image": "4900059_30_b.jpg",
    "amenities": [
        "safety-box",
        "nightclub",
        "deep-soaking-bathtub",
        "beach",
        "business-center"
    ]
},
    {
        "id": "161901",
        "name": "Hotel Santa Cruz",
        "stars": 3,
        "price": 1267.57,
        "image": "6623490_6_b.jpg",
        "amenities": [
            "nightclub",
            "business-center",
            "bathtub",
            "newspaper",
            "restaurant"
        ]
    },
    {
        "id": "161914",
        "name": "NM Lima Hotel",
        "stars": 4,
        "price": 1445.5,
        "image": "981018_26_b.jpg",
        "amenities": [
            "business-center",
            "nightclub",
            "deep-soaking-bathtub",
            "fitness-center",
            "garden"
        ]
    }]