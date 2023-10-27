import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Import the useDispatch hook
import { useNavigate } from "react-router-dom";
import { Dropdown } from "custom-dropdown-react";
import { addEmployee } from "../../redux/employeeSlice";
import { states, departments } from "../../data"; // Import your Redux action creator
import Datepicker from "../../Components/DatePicker/DatePicker";
import {
  isUserIsAdult,
  isDateInPast,
} from "../../Services/dataChecker";
import "./styles.scss";


// Problème de performance dans composant CreateEmployee
// trop de fonction utilisé dans le composant pour gérer les champs de formulaire, lesquelles sont appelées à chaque fois que l'utilisateur tape une lettre dans un champ,
// ce qui provoque un rendu à chaque fois, ce qui est très couteux en terme de performance.
// Pour résoudre ce problème 2 solution :

// - on peut utiliser le hook useMemo() qui permet de mémoriser le résultat d'une fonction et de ne pas la réexécuter à chaque fois.
//   Pour cela, on va créer une fonction qui va gérer les champs de formulaire et qui va être appelée à chaque fois que l'utilisateur tape une lettre dans un champ.
//   On va utiliser le hook useMemo() pour mémoriser le résultat de cette fonction et ne pas la réexécuter à chaque fois.

// - On peut aussi utliser le hookForm de la librairie React Hook Form qui permet de gérer les champs de formulaire de manière optimisée.
//   Pour cela, on va créer un objet qui va contenir les valeurs des champs de formulaire et qui va être mis à jour à chaque fois que l'utilisateur tape une lettre dans un champs. Les erreurs de chaque champs seront aussi stockées dans cet objet



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
    console.log(date.$d.toLocaleDateString());
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
    // check if all fields are not empty
    if (
      firstName === "" ||
      lastName === "" ||
      dateOfBirth === "" ||
      startDate === "" ||
      street === "" ||
      city === "" ||
      state === "" ||
      zipCode === "" ||
      department === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
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
    setDepartment("");
    // redirect to the employee list page
    navigate("/list");
  };
  return (
    <div className="container">
      <h1>Create Employee</h1>
      <form className="create-employee" action="#" id="create-employee">
        <div className="form-group">
          <h3>Personal Information</h3>
          <label htmlFor="first-name">First Name</label>
          {errorMessage.firstName.error && (
            <p className="error-message">{errorMessage.firstName.message}</p>
          )}
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <label htmlFor="last-name">Last Name</label>
          {errorMessage.lastName.error && (
            <p className="error-message">{errorMessage.lastName.message}</p>
          )}
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={handleLastNameChange}
          />
          {errorMessage.dateOfBirth.error && (
            <p className="error-message">{errorMessage.dateOfBirth.message}</p>
          )}
          <label htmlFor="date-of-birth">Date of Birth</label>
          <Datepicker
            id="date-of-birth"
            slotProps={{
              layout: {
                sx: {
                  ".MuiDateCalendar-root": {
                    color: "#fff",
                    borderRadius: 2,
                    borderWidth: 0,
                    borderColor: "#2196f3",
                    border: "0px solid",
                    backgroundColor: "#bbdefb",
                  },
                },
              },
            }}
            className="datepicker"
            label="Select you brithday"
            onChange={handleDateOfBirthChange}
          />
        </div>
        <div className="form-group">
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
          <input
            id="city"
            type="text"
            value={city}
            onChange={handleCityChange}
          />
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
        </div>
        <div className="form-group">
          <h3>Company Information</h3>
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
          <label htmlFor="start-date">Start Date</label>
          <Datepicker
            id="start-date"
            className="datepicker"
            label="Select you start date"
            onChange={handleStartDateChange}
          />
          {errorMessage.startDate.error && (
            <p className="error-message">{errorMessage.startDate.message}</p>
          )}
        </div>
      </form>
      <button className="submit-btn" disabled={isButtonDisabled} onClick={saveEmployee}>
        Save
      </button>
    </div>
  );
};

export default CreateEmployee;
