import React, { useState, useEffect } from 'react';
import Persons from "./components/Persons";
//import axios from "axios";

//imported module from services directory
import personsService from "./services/persons";
import Notification from "./components/Notification";


const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterTerm, setFilterTerm] = useState("")
  const [filterResult, setFilterResult] = useState([])
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {

    /*axios
      .get('http://localhost:3001/persons')*/

    personsService
      .getAll()
      //.then(response => {}
      .then(initialPersons => {

        //setPersons(response.data)
        setPersons(initialPersons)
      })
      .catch(error => {
        console.log('fail')
      })
  }, [])

  const setNewContact = (event) => {
    event.preventDefault();
    const contactObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    personsService
      .create(contactObject)
      //.then(response => {}
      .then(returnedPersons => {

        //setPersons(persons.concat(response.data))
        setPersons(persons.concat(returnedPersons))
        setNewName("")
        setNewNumber("")
        setSuccessMessage(`Added ${contactObject.name}.`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 3000)
      })
      .catch(error => {
        console.log('fail')
      })
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilterTerm(event.target.value);
  }

  React.useEffect(() => {
    const results = persons.filter(person =>
      person.name.toLowerCase().includes(filterTerm.toLowerCase())
    );
    setFilterResult(results);
  }, [filterTerm]); // eslint-disable-line react-hooks/exhaustive-deps



  const deletePerson = (id) => {
    personsService
      .remove(id)
      .then(() => {
        const filteredPersons = persons.filter(person => (person.id !== id))
        setPersons(filteredPersons)
      })
      .catch(error => {
        console.log('fail')
      })
  };



  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
      <h5>filter shown with: <input onChange={handleFilter} value={filterTerm} /></h5>
      <h2>add a new</h2>
      <form onSubmit={setNewContact}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={filterResult} deletePersonFunc={deletePerson} />
    </div>
  );
}

export default App;
