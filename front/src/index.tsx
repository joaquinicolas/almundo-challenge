import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {visibilityFilter} from './reducers';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import  {StoreState} from './types/index';

import App from './App';
import './index.css';
import {fetchHotels, showAll, ShowAll} from './actions/index';
import {SHOW_ALL} from './constants/index';
import {HotelDAOImpl} from './api/index';

const store = createStore<StoreState>(visibilityFilter,
    {visibilityFilter: {filter: SHOW_ALL, payload: ''},hotels:[]} ,
    applyMiddleware(thunkMiddleware));
export const hotelAPI = HotelDAOImpl()
store.dispatch(fetchHotels(hotelAPI))

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
