import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';

const Datepicker = ({ label, onChange }) => {
  const handleDateChange = (date) => {
    onChange(date); // Appel de la fonction de rappel avec la date sélectionnée
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label={label} onChange={handleDateChange} />
    </LocalizationProvider>
  );
};

export default Datepicker;