import React, {PropTypes} from 'react';

const Person = ({person, index}) => {
    return (
        <div>
           {index}. {person.firstname} {person.lastname} 
        </div>
    );
};

Person.propTypes = {
    person: PropTypes.object.isRequired
};

export default Person;