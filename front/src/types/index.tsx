import {FILTER} from '../constants/index';

export interface Hotel {
    id: string,
    name: string,
    stars: number,
    price: number,
    image: string,
    amenities: string[]
}

type Payload = string | number
export interface Filter {
    filter: FILTER,
    payload: Payload
}
export interface StoreState {
    visibilityFilter: Filter,
    hotels: Hotel[]
}