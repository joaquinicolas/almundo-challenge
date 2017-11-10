import * as express from 'express';
import {HotelDAOImpl} from '../Hotel/repository';
export const router = express.Router();

const hotelRepo: HotelDAOImpl = new HotelDAOImpl();
router.get('/', (req, res) => {
    hotelRepo.getAll()
        .then(value => res.json(value).sendStatus(200))
})

router.get('/byName/:name', (req, res) => {
    if (!req.params.name)
        return res.sendStatus(404);
    hotelRepo.filterByName(req.params.name)
        .then(hotels => res.json(hotels).sendStatus(200));
})

router.get('/bystars/:stars', (req, res) => {
    if (!req.params.stars)
        return res.sendStatus(404);

    hotelRepo.filterByStars(req.params.stars)
        .then(h => res.json(h).sendStatus(200));
})
