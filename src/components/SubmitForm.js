import React, { useState } from 'react';

const SubmitForm = () => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const addContact = (props) => {
        props.addNewContactFunc(newName, newNumber)
    }

    return (
        <form onSubmit={addContact}>
            <label>
                add a new
          </label>
            <div>
                name: <input onChange={handleNameChange} value={newName} />
            </div>
            <div>
                number: <input onChange={handleNumberChange} value={newNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};

export default SubmitForm;