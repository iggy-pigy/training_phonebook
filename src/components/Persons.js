import React from 'react';
import Person from "./Person";

const Persons = (props) => {
    const { persons } = props
    return (
        <div>
            <ul>
                {persons.map(person => <Person key={person.name} person={person} />)}
            </ul>
        </div>
    );
};

export default Persons;