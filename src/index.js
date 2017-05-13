// src/index.js
import React from 'react';
import { render } from 'react-dom';
import createStore from './store'

import Routes from './routes';

import './index.css';

let store = createStore();

render(
  <Routes store={store} />,
  document.getElementById('root')
);