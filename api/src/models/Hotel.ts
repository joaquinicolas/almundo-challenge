export default class Hotel {
    id: string
    name: string
    stars: number
    price: number
    image: string
    amenities: string []


    constructor(id: string, name: string, stars: number, price: number, image: string, amenities: string[]) {
        this.id = id;
        this.name = name;
        this.stars = stars;
        this.price = price;
        this.image = image;
        this.amenities = amenities;
    }


}