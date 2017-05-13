import * as actionTypes from './action-types';

export const addPerson = (person) => {
    return {
        type: actionTypes.ADD_PERSON,
        person
    };
}