import React, {PropTypes} from 'react';
import Person from '../Person';

const PeopleList = ({people}) => {
    return (
        <div>
            {people.map((person, index) => 
                <Person key={index} person={person} index={++index} />
            )}
        </div>
    );
};

PeopleList.propTypes = {
    people: PropTypes.array.isRequired
};

export default PeopleList;