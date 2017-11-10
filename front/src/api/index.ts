import {Hotel} from '../types/index';
import fetch from 'isomorphic-fetch'

export const API = 'http://127.0.0.1:3001';

export interface HotelDAO {
    getAll(): Promise<Hotel[]>
    getByName(name: string): Promise<Hotel[]>
    getByStars(stars: number): Promise<Hotel[]>
}

export function HotelDAOImpl(): HotelDAO {
    const devAPI: HotelDAO =  {
        getAll: () => new Promise(resolve => resolve(getMockHotels)),
        getByName: (name: string) => new Promise(resolve => resolve(getMockHotels.filter(h => h.name.includes(name)))),
        getByStars: (stars: number) => new Promise(resolve => resolve(getMockHotels.filter(h => h.stars == stars)))
    };

    const api: HotelDAO = {
        getAll: () => {
            return fetch(API)
                .then(response => response.json())
        },
        getByName: (name: string) => {
            return fetch(`${API}/byName/${name}`)
                .then(response => response.json())
        },
        getByStars: (stars: number) => {
            return fetch(`${API}/bystars/${stars}`)
                .then(response => response.json())
        }
    }

    console.log("You are as : ", process.env.NODE_ENV, " mode");
    if (process.env.NODE_ENV == 'development')
        return devAPI;
    else
        return api;

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