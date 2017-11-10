import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {visibilityFilter} from './reducers';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import  {StoreState} from './types/index';

import App from './App';
import './index.css';
import {fetchHotels, HotelDAOImpl, showAll, ShowAll} from './actions/index';
import {SHOW_ALL} from './constants/index';

const store = createStore<StoreState>(visibilityFilter,
    {visibilityFilter: {filter: SHOW_ALL, payload: ''},hotels:[]} ,
    applyMiddleware(thunkMiddleware));
const hotelAPI = HotelDAOImpl()
store.dispatch(fetchHotels(hotelAPI))
    .then(() => console.log(store.getState()))

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
