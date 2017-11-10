import * as fs from 'fs';
import Hotel from '../models/Hotel';

export interface IHotelDAO {
    filterByStars: (stars: number) => Promise<Hotel[]>
    filterByName: (name: string) => Promise<Hotel[]>
    getAll: () => Promise<Hotel[]>
}


export class FileData {
    private _hotelList: Hotel[];
    constructor(uri: string) {
        this._hotelList = require(uri);
        console.log(this._hotelList)
    }


    get hotelList(): Hotel[] {
        return this._hotelList;
    }
}


export class HotelDAOImpl implements IHotelDAO {

    private _fileRepo: FileData
    constructor(){
        this._fileRepo = new FileData('../../data/data.json')
    }

    filterByStars(stars: number): Promise<Hotel[]>{
        return new Promise(resolve => resolve(this._fileRepo.hotelList.filter(value => value.stars == stars)));
    }
    filterByName(name: string): Promise<Hotel[]>{
        return new Promise(resolve => resolve(this._fileRepo.hotelList.filter(value => value.name.includes(name))));
    }
    getAll(): Promise<Hotel[]> {
        return new Promise(resolve => resolve(this._fileRepo.hotelList));
    }

}
