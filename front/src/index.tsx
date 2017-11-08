import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './containers/AlMundo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';

import App from './App'

import './index.css';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(

    <App/>,
  document.getElementById('root') as HTMLElement
);
