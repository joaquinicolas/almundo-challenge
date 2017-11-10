import HotelList from '../components/HotelList';
import * as actions from '../actions';
import {Filter, Hotel, StoreState} from '../types/index';
import {connect} from 'react-redux';
import {FILTERBY_NAME, FILTERBY_STARS, SHOW_ALL} from '../constants/index';

export function mapStateToProps({hotels}: StoreState) {
    console.log("RECEIVED HOTELS: ", hotels)
    return {
        hotels: hotels
    }
}

export default connect(mapStateToProps)(HotelList)