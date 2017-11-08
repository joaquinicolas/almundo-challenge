
import * as constants from '../constants';

export interface ShowAll {
    type: constants.SHOW_ALL;
}

export interface FilterByName {
    type: constants.FILTERBY_NAME;
}
export interface FilterByStars {
    type: constants.FILTERBY_STARS;
}

export type VisibilityFilter = ShowAll | FilterByName | FilterByStars;

export function showAll(): ShowAll {
    return {
        type: constants.SHOW_ALL
    };
}

export function filterByName(): FilterByName {
    return {
        type: constants.FILTERBY_NAME
    };
}
export function filterByStars(): FilterByStars {
    return {
        type: constants.FILTERBY_STARS
    };
}