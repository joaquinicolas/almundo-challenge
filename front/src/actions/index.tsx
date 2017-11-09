
import * as constants from '../constants';

export interface ShowAll {
    type: constants.SHOW_ALL;
}

export interface FilterByName {
    type: constants.FILTERBY_NAME;
    payload: string
}
export interface FilterByStars {
    type: constants.FILTERBY_STARS,
    payload: number
}

export type VisibilityActions = ShowAll | FilterByName | FilterByStars;

export function showAll(): ShowAll {
    return {
        type: constants.SHOW_ALL
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