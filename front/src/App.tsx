import * as React from 'react';
import './App.css';
import HotelList from './containers/HotelList';
import FilterList from './containers/FilterList';

const logo = require('./logo.svg');

const App: React.SFC<{}> = () => {
    return(
        <div className="row">
            <FilterList/>
            <HotelList/>
        </div>
        );
}

export default App;