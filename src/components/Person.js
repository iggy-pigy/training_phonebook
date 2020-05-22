import React from 'react';

const Person = (props) => {
    const { person } = props
    return (
        <li>
            <h5> {person.name} {person.number} </h5>
        </li>
    );
};

export default Person;