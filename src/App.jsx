import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import pages
import CreateEmployee from "./Pages/CreateEmployee/index.jsx";
import EmployeesList from "./Pages/EmployeeList/index.jsx";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateEmployee />,
    children: [],
  },

  {
    path: "list",
    element: <EmployeesList />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
