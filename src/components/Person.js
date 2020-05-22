import React from 'react';

const Person = (props) => {
    const { person } = props
    return (
        <div>
            <li>
                <h4> {person.name} {person.number} </h4>
            </li>
        </div>
    );
};

export default Person;