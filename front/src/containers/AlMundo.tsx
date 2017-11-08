import Card from '../components/Hotel/Hotel';
import * as actions from '../actions/';
import { StoreState} from '../types/index';
import { connect, Dispatch } from 'react-redux';



export function mapStateToProps({ hotels }: StoreState) {
  return {
    hotels
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.VisibilityFilter>) {
  return {
      ShowAll: () => dispatch(actions.showAll()),
      FilterByName: () => dispatch(actions.filterByName()),
      FilterByStars: () => dispatch(actions.filterByStars()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
