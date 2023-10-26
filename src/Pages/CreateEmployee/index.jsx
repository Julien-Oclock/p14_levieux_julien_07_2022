import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import the useDispatch hook
import { useNavigate } from "react-router-dom";
import { Dropdown } from "custom-dropdown-react";
import { addEmployee } from "../../redux/employeeSlice";
import { states, departments } from "../../data"; // Import your Redux action creator
import Datepicker from "../../Components/DatePicker/DatePicker";
import {
  isUserIsAdult,
  isDateInPast,
  isDateValid,
} from "../../Services/dataChecker";

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
  const [errorMessage, setErrorMessage] = useState({
    firstName: { message: "", error: false },
    lastName: { message: "", error: false },
    street: { message: "", error: false },
    dateOfBirth: { message: "", error: false },
    startDate: { message: "", error: false },
    city: { message: "", error: false },
    state: { message: "", error: false },
    zipCode: { message: "", error: false },
    department: { message: "", error: false },
  });
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  // handle error message

  const dispatch = useDispatch();

  const handleFirstNameChange = (e) => {
    if (e.target.value.length < 2) {
      setErrorMessage({
        ...errorMessage,
        firstName: {
          message: "First name must be at least 2 characters",
          error: true,
        },
      });
      setButtonDisabled(true);
    } else {
      setErrorMessage({
        ...errorMessage,
        firstName: {
          message: "",
          error: false,
        },
      });
      setButtonDisabled(false);
    }
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    if (e.target.value.length < 2) {
      setErrorMessage({
        ...errorMessage,
        lastName: {
          message: "Last name must be at least 2 characters",
          error: true,
        },
      });
      setButtonDisabled(true);
    } else {
      setErrorMessage({
        ...errorMessage,
        lastName: {
          message: "",
          error: false,
        },
      });
      setButtonDisabled(false);
    }
    setLastName(e.target.value);
  };

  const handleDateOfBirthChange = (date) => {
    if (!isUserIsAdult(date.$d.toLocaleDateString())) {
      setErrorMessage({
        ...errorMessage,
        dateOfBirth: {
          message: "You must be 18 years old or older",
          error: true,
        },
      });
      setButtonDisabled(true);
    } else {
      setErrorMessage({
        ...errorMessage,
        dateOfBirth: {
          message: "",
          error: false,
        },
      });
      setButtonDisabled(false);
    }
    setDateOfBirth(date.$d.toLocaleDateString());
  };

  const handleStartDateChange = (date) => {
    if (!isDateInPast(date.$d.toLocaleDateString())) {
      setErrorMessage({
        ...errorMessage,
        startDate: {
          message: "Date of birth must be in the past",
          error: true,
        },
      });
      setButtonDisabled(true);
    } else {
      setErrorMessage({
        ...errorMessage,
        startDate: {
          message: "",
          error: false,
        },
      });
      setButtonDisabled(false);
    }
    setStartDate(date.$d.toLocaleDateString());
  };

  const handleStreetChange = (e) => {
    if (e.target.value.length < 2) {
      setErrorMessage({
        ...errorMessage,
        street: {
          message: "Street must be at least 2 characters",
          error: true,
        },
      });
      setButtonDisabled(true);
    } else {
      setErrorMessage({
        ...errorMessage,
        street: {
          message: "",
          error: false,
        },
      });
      setButtonDisabled(false);
    }
    setStreet(e.target.value);
  };

  const handleCityChange = (e) => {
    if (e.target.value.length < 2) {
      setErrorMessage({
        ...errorMessage,
        city: {
          message: "City must be at least 2 characters",
          error: true,
        },
      });
      setButtonDisabled(true);
    } else {
      setErrorMessage({
        ...errorMessage,
        city: {
          message: "",
          error: false,
        },
      });
      setButtonDisabled(false);
    }
    setCity(e.target.value);
  };

  const handleStateChange = (optionName) => {
    if (optionName === "") {
      setErrorMessage({
        ...errorMessage,
        state: {
          message: "Please select a state",
          error: true,
        },
      });
      setButtonDisabled(true);
    } else {
      setErrorMessage({
        ...errorMessage,
        state: {
          message: "",
          error: false,
        },
      });
      setButtonDisabled(false);
    }
    setState(optionName);
  };

  const handleZipCodeChange = (e) => {
    if (e.target.value.length < 5) {
      setErrorMessage({
        ...errorMessage,
        zipCode: {
          message: "Zip code must be at least 5 characters",
          error: true,
        },
      });
      setButtonDisabled(true);
    } else {
      setErrorMessage({
        ...errorMessage,
        zipCode: {
          message: "",
          error: false,
        },
      });
      setButtonDisabled(false);
    }
    setZipCode(e.target.value);
  };

  const handleDepartmentChange = (optionName) => {
    if (optionName === "") {
      setErrorMessage({
        ...errorMessage,
        department: {
          message: "Please select a department",
          error: true,
        },
      });
      setButtonDisabled(true);
    } else {
      setErrorMessage({
        ...errorMessage,
        department: {
          message: "",
          error: false,
        },
      });
      setButtonDisabled(false);
    }
    setDepartment(optionName);
  };

  const navigate = useNavigate();

  const saveEmployee = async () => {
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
    setDepartment(""); // Reset department to default

    // redirect to the employee list page
    navigate("/list");
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
        {errorMessage.firstName.error && (
          <p className="error-message">{errorMessage.firstName.message}</p>
        )}

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        {errorMessage.lastName.error && (
          <p className="error-message">{errorMessage.lastName.message}</p>
        )}

        <Datepicker
          className="datepicker"
          label="Select you brithday"
          onChange={handleDateOfBirthChange}
        />
        {errorMessage.dateOfBirth.error && (
          <p className="error-message">{errorMessage.dateOfBirth.message}</p>
        )}

        <h3>Adresse</h3>

        <label htmlFor="street">Street</label>
        <input
          id="street"
          type="text"
          value={street}
          onChange={handleStreetChange}
        />
        {errorMessage.street.error && (
          <p className="error-message">{errorMessage.street.message}</p>
        )}

        <label htmlFor="city">City</label>
        <input id="city" type="text" value={city} onChange={handleCityChange} />
        {errorMessage.city.error && (
          <p className="error-message">{errorMessage.city.message}</p>
        )}

        <label htmlFor="state">State</label>
        <Dropdown
          id="state"
          title="State"
          children={[...states]}
          onChange={handleStateChange}
        />
        {errorMessage.state.error && (
          <p className="error-message">{errorMessage.state.message}</p>
        )}
        <label htmlFor="zipcode">Zip Code</label>
        <input
          id="zipcode"
          type="number"
          value={zipCode}
          onChange={handleZipCodeChange}
        />
        {errorMessage.zipCode.error && (
          <p className="error-message">{errorMessage.zipCode.message}</p>
        )}
        <label className="work-dep" htmlFor="department">
          Department
        </label>
        <Dropdown
          title="Departement"
          children={[...departments]}
          onChange={handleDepartmentChange}
        />
        {errorMessage.department.error && (
          <p className="error-message">{errorMessage.department.message}</p>
        )}
        <Datepicker
          className="datepicker"
          label="Select you start date"
          onChange={handleStartDateChange}
        />
        {errorMessage.startDate.error && (
          <p className="error-message">{errorMessage.startDate.message}</p>
        )}
      </form>

      <button disabled={isButtonDisabled} onClick={saveEmployee}>
        Save
      </button>
    </div>
  );
};

export default CreateEmployee;
