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

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "Sales",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const handleDateOfBirthChange = (date) => {
    const dateOfBirth = date.$d.toLocaleDateString();
    if (!isUserIsAdult(dateOfBirth)) {
      setErrors({ ...errors, dateOfBirth: "You must be 18 years old or older" });
    } else {
      setErrors({ ...errors, dateOfBirth: "" });
      handleInputChange("dateOfBirth", dateOfBirth);
    }
  };

  const handleStartDateChange = (date) => {
    const startDate = date.$d.toLocaleDateString();
    if (!isDateInPast(startDate)) {
      setErrors({ ...errors, startDate: "Date of birth must be in the past" });
    } else {
      setErrors({ ...errors, startDate: "" });
      handleInputChange("startDate", startDate);
    }
  };

  // Other onChange handlers for different fields...

  const saveEmployee = async () => {
    const errorValues = {};
    // Validate fields
    if (Object.values(formValues).some((value) => value === "")) {
      alert("Please fill all the fields");
      return;
    }

    Object.entries(formValues).forEach(([key, value]) => {
      if (value.length < 2) {
        errorValues[key] = `${key} must be at least 2 characters`;
      }
    });

    if (Object.values(errors).some((value) => value !== "")) {
      alert("Please correct the form errors");
      return;
    }

    dispatch(addEmployee(formValues));
    // setFormValues({
    //   firstName: "",
    //   lastName: "",
    //   dateOfBirth: "",
    //   startDate: "",
    //   street: "",
    //   city: "",
    //   state: "",
    //   zipCode: "",
    //   department: "",
    // });
    navigate("/list");
  };

  return (
    <div className="container">
      <h1>Create Employee</h1>
      <form className="create-employee" action="#" id="create-employee">
        <div className="form-group">
          <h3>Personal Information</h3>
          <label htmlFor="first-name">First Name</label>
          {errors.firstName && (
            <p className="error-message">{errors.firstName}</p>
          )}
          <input
            type="text"
            id="first-name"
            value={formValues.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
          />
          <label htmlFor="last-name">Last Name</label>
          {errors.lastName && (
            <p className="error-message">{errors.lastName}</p>
          )}
          <input
            type="text"
            id="last-name"
            value={formValues.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
          />
          {errors.dateOfBirth && (
            <p className="error-message">{errors.dateOfBirth}</p>
          )}
          <label htmlFor="date-of-birth">Date of Birth</label>
          <Datepicker
            id="date-of-birth"
            onChange={handleDateOfBirthChange}
            // Other Datepicker props
          />
        </div>
        <div className="form-group">
          <h3>Adresse</h3>
          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            value={formValues.street}
            onChange={(e) => handleInputChange('street', e.target.value)}
          />
          {errors.street && (
            <p className="error-message">{errors.street}</p>
          )}
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            value={formValues.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
          />
          {errors.city && (
            <p className="error-message">{errors.city}</p>
          )}
          <label htmlFor="state">State</label>
          <Dropdown
            id="state"
            title="State"
            children={[...states]}
            onChange={(optionName) => handleInputChange('state', optionName)}
          />
          {errors.state && (
            <p className="error-message">{errors.state}</p>
          )}
          <label htmlFor="zipcode">Zip Code</label>
          <input
            id="zipcode"
            type="number"
            value={formValues.zipCode}
            onChange={(e) => handleInputChange('zipCode', e.target.value)}
          />
          {errors.zipCode && (
            <p className="error-message">{errors.zipCode}</p>
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
            onChange={(optionName) => handleInputChange('department', optionName)}
          />
          {errors.department && (
            <p className="error-message">{errors.department}</p>
          )}
          <label htmlFor="start-date">Start Date</label>
          <Datepicker
            id="start-date"
            onChange={handleStartDateChange}
            // Other Datepicker props
          />
          {errors.startDate && (
            <p className="error-message">{errors.startDate}</p>
          )}
        </div>
      </form>
      <button className="submit-btn" onClick={saveEmployee}>
        Save
      </button>
    </div>
  );
};

export default CreateEmployee;