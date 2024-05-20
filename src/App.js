import React, { useState } from 'react'

const App = () => {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");

  const [firstNameErr, setFirstNameErr] = useState({});
  const [lastNameErr, setLastNameErr] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      setFirstName(" ");
      setLastName(" ");
    }
  }

  const formValidation = () => {
    const firstNameErr = {};
    const lastNameErr = {};
    let isValid = true;

    if (firstName.trim().length < 5) {
      firstNameErr.firstNameShort = "first name is too short";
      isValid = false;
    }
    if (firstName.trim().length > 10) {
      firstNameErr.firstNameLong = "first name is too long";
      isValid = false;
    }
    if (!lastName.includes("123")) {
      lastNameErr.lastName123 = "last name must contain 123";
      isValid = false;
    }

    setFirstNameErr(firstNameErr);
    setLastNameErr(lastNameErr);
    return isValid;
  }

  return (
    <form onSubmit={onSubmit}>
      <label>First Name:</label>
      <input type='text' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
      <br />
      {Object.keys(firstNameErr).map((key) => {
        return <div style={{ color: "red" }}>{firstNameErr[key]}</div>
      })}
      <label>Last Name:</label>
      <input type='text' value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
      <br />
      {Object.keys(lastNameErr).map((key) => {
        return <div style={{ color: "red" }}>{lastNameErr[key]}</div>
      })}
      <button type='submit'>Submit</button>
    </form>
  
  )
}

export default App
