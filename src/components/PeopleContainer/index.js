import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as peopleActions from '../../actions/people-actions';
import PeopleList from '../PeopleList';
import PersonInput from '../PersonInput';

class PeopleContainer extends Component {
  constructor(props) {
      super(props);

      this.state = {
          people: []
      };
  }

  render() {
    const {people} = this.props;

    return (
      <div>
          <PersonInput addPerson={this.props.actions.addPerson} />
          <PeopleList people={people} />
      </div>
    );
  }
}

PeopleContainer.PropTypes = {
    people: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToPros(state, pros) {
    return {
        people: state.people
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(peopleActions, dispatch)
    };
}

export default connect(mapStateToPros, mapDispatchToProps)(PeopleContainer);
