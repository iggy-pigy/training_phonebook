import React, { useState } from 'react';
import Persons from "./components/Persons";

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterTerm, setFilterTerm] = useState("")
  const [filterResult, setFilterResult] = useState([])

  const setNewContact = (event) => {
    event.preventDefault();
    const contactObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    setPersons(persons.concat(contactObject))
    setNewName("")
    setNewNumber("")
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
