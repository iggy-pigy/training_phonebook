import React from 'react';

const Person = (props) => {
    const { person, deleteFunc } = props
    const handleDelete = () => { deleteFunc(person.id) }
    return (
        <li>
            <h5> {person.name} {person.number} <button onClick={handleDelete}  >Delete</button></h5>
        </li>
    );
};

export default Person;