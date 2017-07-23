// src/index.js
import React from 'react';
import { render } from 'react-dom';
import createStore from './store'

import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


let store = createStore();

render(
  <Routes store={store} />,
  document.getElementById('root')
);