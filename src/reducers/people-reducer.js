import * as actionTypes from '../actions/action-types';

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            if (!action.person.firstname || !action.person.lastname) {
                return state;
            }
            return [...state, Object.assign({}, action.person)];
        default:
            return state;
    }
};