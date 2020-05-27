import React from 'react';
import Person from "./Person";

const Persons = (props) => {
    const { persons, deletePersonFunc } = props
    console.log(props);
    return (
        <div>
            <ul>
                {persons.map(person => <Person key={person.name} person={person} deleteFunc={deletePersonFunc} />)}
            </ul>
        </div>
    );
};



export default Persons;