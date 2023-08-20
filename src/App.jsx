import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import pages
import CreateEmployee from './Pages/CreateEmployee/index.jsx';
import EmployeesList from './Pages/EmployeeList/index.jsx';

import './App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CreateEmployee />} />
                <Route path="/about" element={<EmployeesList />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
