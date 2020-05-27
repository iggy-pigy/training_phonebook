import React, { useState, useEffect } from 'react';
import Persons from "./components/Persons";
//import axios from "axios";
import personsService from "./services/persons";


const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterTerm, setFilterTerm] = useState("")
  const [filterResult, setFilterResult] = useState([])

  useEffect(() => {

    /*axios
      .get('http://localhost:3001/persons')*/

    personsService
      .getAll()
      /*.then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)*/
      .then(initialPersons => {
        setPersons(initialPersons)
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
      .then(returnedPersons => {
        setPersons(persons.concat(returnedPersons))
        setNewName("")
        setNewNumber("")
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





  return (
    <div>
      <h2>Phonebook</h2>
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
      <Persons persons={filterResult} />
    </div>
  );
}

export default App;
