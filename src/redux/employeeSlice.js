import { createSlice } from "@reduxjs/toolkit";
import { datas } from "../data";

const storedEmployeeList = JSON.parse(localStorage.getItem("employeeList")) || [];

const initialState = {
  employeeList: storedEmployeeList.length ? storedEmployeeList : datas,
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employeeList.push(action.payload);
      localStorage.setItem("employeeList", JSON.stringify(state.employeeList));
    },
    deleteEmployee: (state, action) => {
      state.employeeList = state.employeeList.filter(
        (employee) => employee.id !== action.payload
      );
    },
    editEmployee: (state, action) => {
      const { id, name, email, phone, address } = action.payload;
      const employee = state.employeeList.find((employee) => employee.id === id);
      if (employee) {
        employee.name = name;
        employee.email = email;
        employee.phone = phone;
        employee.address = address;
      }
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    sortEmployeeList: (state) => {
      if (state.sortBy) {
        state.employeeList.sort((a, b) =>
          a[state.sortBy] > b[state.sortBy] ? 1 : -1
        );
      }
    },
  },
});

export const {
  addEmployee,
  deleteEmployee,
  editEmployee,
  setSortBy,
  sortEmployeeList,
  addEmployeeWithImmer,
} = employeeSlice.actions;

const rootReducer = employeeSlice.reducer;

export default rootReducer;
