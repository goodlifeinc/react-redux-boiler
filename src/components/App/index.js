// src/components/App/index.js
import React, { Component } from 'react';
import './style.css';

import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Panel from 'muicss/lib/react/panel';
import Button from 'muicss/lib/react/button';

import PeopleContainer from '../PeopleContainer';

import { Link } from 'react-router-dom'

import 'muicss/dist/css/mui.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div>
        <Appbar>
          <Container>
            <div className="mui--text-display3">Hello</div>
          </Container>
        </Appbar>
        <Container>
          <Row>
            <Col md="12">
              <Panel style={{marginTop: 20}}>
                <div className="mui--text-display2">Welcome to FoosballApp</div>
                <div className="mui--text-display1">
                  Join this great application by clicking <Link to="register"><Button size="large" variant="flat" color="danger">Register</Button></Link>
                </div>
              </Panel>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <Panel>
                <div className="mui--text-display1 mui--text-center">Register</div>
              </Panel>
            </Col>
            <Col md="3">
              <Panel>
                <div className="mui--text-display1 mui--text-center">Challenge</div>
              </Panel>
            </Col>
            <Col md="3">
              <Panel>
                <div className="mui--text-display1 mui--text-center">Play</div>
              </Panel>
            </Col>
            <Col md="3">
              <Panel>
                <div className="mui--text-display1 mui--text-center">Entertain</div>
              </Panel>
            </Col>
          </Row>
          <Row>
            <PeopleContainer />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;