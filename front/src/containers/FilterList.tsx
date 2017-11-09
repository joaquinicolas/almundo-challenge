import FilterList from '../components/FilterList'
import * as actions from '../actions'
import {connect, Dispatch} from 'react-redux';


export function mapDispatchToProps(dispatch: Dispatch<actions.VisibilityActions>){
    return {
        filterByStars: (stars: number) => dispatch(actions.filterByStars(stars)),
        filterByName: (text: string) => dispatch(actions.filterByName(text))
    };
}

export default connect(null, mapDispatchToProps)(FilterList);