// src/components/Register/index.js
import React, { Component } from 'react';

import './style.css';

import {Row, Col} from 'reactstrap';
import PeopleContainer from '../PeopleContainer';

export default class Register extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div>
        <h1>
          Register
        </h1>

          <Row>
            <Col md="6">
              <PeopleContainer />
            </Col>
          </Row>
      </div>
    );
  }
}