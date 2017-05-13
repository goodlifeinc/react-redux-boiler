// src/routes.js
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import Register from './components/Register';

const Routes = ({store}) => (
  <Provider store={store}>
    <Router>
      <div>
          <Route exact path="/" component={App}/>
          <Route path="/about" component={About}/>
          <Route path="/register" component={Register}/>
      </div>
    </Router>
  </Provider>
);

Routes.propTypes = {
  store: PropTypes.object.isRequired
}

export default Routes;