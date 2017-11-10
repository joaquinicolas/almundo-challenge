import * as React from 'react'
import HotelComponent from './Hotel/Hotel'
import {Hotel} from '../types'

export interface Props {
    hotels: Hotel[]
}
const HotelList: React.SFC<Props> = (props: Props) => {
    console.log("RECEIVED HOTELS IN HOTELSLIST.tsx: ", props.hotels)
    return (
        <main className="col-md-9">
            {
               props.hotels.map((value, index) => {
                   return <HotelComponent key={index} image={value.image} name={value.name}
                                   stars={value.stars}
                                   amenities={value.amenities}
                                   price={value.price}/>
               })
            }
        </main>
    )
}

export default HotelList;