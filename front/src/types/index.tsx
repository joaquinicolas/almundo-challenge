export interface Hotel {
    id: string,
    name: string,
    stars: number,
    price: number,
    image: string,
    amenities: string[]
}

export interface StoreState {
    visibilityFilter: string,
    hotels: Hotel[]
}