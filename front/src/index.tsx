import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {visibilityFilter} from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import  {StoreState} from './types/index';

import App from './App';
import './index.css';

const store = createStore<StoreState>(visibilityFilter);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
