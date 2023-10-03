import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Import the useDispatch hook
import { redirect,  } from "react-router-dom";
import  Dropdown  from 'opcr_dropdown_react'
import { addEmployee } from "../../redux/employeeSlice"; // Import your Redux action creator
import "./styles.scss";


const CreateEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("Sales"); // Set a default department

  const dispatch = useDispatch();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const saveEmployee = () => {
    const newEmployee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      state,
      zipCode,
      department,
    };

    dispatch(addEmployee(newEmployee));

    // Clear the form fields after adding the employee
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setStartDate("");
    setStreet("");
    setCity("");
    setState("");
    setZipCode("");
    setDepartment("Sales"); // Reset department to default

    // redirect to the employee list page
    redirect("/list");
  };

  return (
    <div className="container">
      <h1>Create Employee</h1>
      <form action="#" id="create-employee">
        <h3>Personal Information</h3>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          value={firstName}
          onChange={handleFirstNameChange}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          value={lastName}
          onChange={handleLastNameChange}
        />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input
          id="date-of-birth"
          type="text"
          value={dateOfBirth}
          onChange={handleDateOfBirthChange}
        />

        <label htmlFor="start-date">Start Date</label>
        <input
          id="start-date"
          type="text"
          value={startDate}
          onChange={handleStartDateChange}
        />

        <h3>Adresse</h3>

        <label htmlFor="street">Street</label>
        <input
          id="street"
          type="text"
          value={street}
          onChange={handleStreetChange}
        />

        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={handleCityChange}
        />

        <label htmlFor="state">State</label>
        <select name="state" id="state" value={state} onChange={handleStateChange}>
          {/* Add options for states */}
        </select>

        <Dropdown />

        <label htmlFor="zip-code">Zip Code</label>
        <input
          id="zip-code"
          type="number"
          value={zipCode}
          onChange={handleZipCodeChange}
        />

        <label className="work-dep" htmlFor="department">
          Department
        </label>
        <select
          name="department"
          id="department"
          value={department}
          onChange={handleDepartmentChange}
        >
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </form>

      <button onClick={saveEmployee}>Save</button>
    </div>
  );
};

export default CreateEmployee;