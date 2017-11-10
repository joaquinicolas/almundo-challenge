import FilterList from '../components/FilterList'
import * as actions from '../actions'
import {connect, Dispatch} from 'react-redux';
import {hotelAPI} from '../index';
import {fetchHotels} from '../actions/index';


export function mapDispatchToProps(dispatch: Dispatch<actions.VisibilityActions>){
    return {
        filterByStars: (stars: number) => dispatch(actions.filterByStars(stars, hotelAPI)),
        filterByName: (text: string) => dispatch(actions.filterByName(text, hotelAPI)),
        allStars: () => dispatch(fetchHotels(hotelAPI))
    };
}

export default connect(null, mapDispatchToProps)(FilterList);