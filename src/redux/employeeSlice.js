import { createSlice } from "@reduxjs/toolkit";
import { datas } from "../data";

const initialState = {
  employeeList: datas,
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employeeList.push(action.payload);
    },
    deleteEmployee: (state, action) => {
      state.employeeList = state.employeeList.filter(
        (employee) => employee.id !== action.payload
      );
    },
    editEmployee: (state, action) => {
      // ... votre code d'édition existant
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
