import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CreateEmployee from "./Pages/CreateEmployee/index.jsx";
import EmployeesList from "./Pages/EmployeeList/index.jsx";

import "./App.scss";

function App() {
  return (
    <Router basename="/p14_levieux_julien_07_2022/">
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/list" element={<EmployeesList />} />
      </Routes>
    </Router>
  );
}

export default App;