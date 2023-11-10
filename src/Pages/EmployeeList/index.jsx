import React, { useState } from "react";
import { useSelector } from "react-redux"; // Import the useSelector hook
import EmployeeTable from "../../Components/EmployeeTable/EmployeeTable";


import "./styles.scss";
// Assurez-vous d'importer correctement le chemin du fichier

const EmployeeList = () => {
  // get data from redux store
  const employeeList = useSelector((state) => state.employeeList);
  const [dataSet, setDataSet] = useState(employeeList);
 


  const columns = [
    { Header: "First Name", accessor: "Firstname", sortable: true },
    { Header: "Last Name", accessor: "lastName", sortable: true },
    { Header: "Start Date", accessor: "startDate", sortable: true },
    { Header: "Department", accessor: "department", sortable: true },
    { Header: "Date of Birth", accessor: "dateOfBirth", sortable: true },
    { Header: "Street", accessor: "street", sortable: true },
    { Header: "City", accessor: "city", sortable: true },
    { Header: "State", accessor: "state", sortable: true },
    { Header: "Zip Code", accessor: "zipCode", sortable: true },
  ];

  return (
    <div className="employee-list">
      <h1 className="employee-list__title">Tableau des Employés</h1>
      <EmployeeTable data={dataSet} columns={columns} />
    </div>
  );
};

export default EmployeeList;
