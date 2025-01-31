import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

const CollegeSelector = ({ selectedCollege, onCollegeChange }) => {
  // Mock data for colleges
  const colleges = [
    "Sahrdaya Collage of Engineering",
    "Christ Collage",
    "Harvard College of Technology",
    "Cambridge Institute of Science",
    "IIT Delhi",
  ];

  return (
    <Box sx={{ minWidth: 200, maxWidth: 400, m: 'auto', mt: 4 }}>
      <FormControl fullWidth>
        <InputLabel>Select College</InputLabel>
        <Select
          value={selectedCollege}
          label="Select College"
          onChange={(e) => onCollegeChange(e.target.value)}
        >
          {colleges.map((college) => (
            <MenuItem key={college} value={college}>
              {college}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CollegeSelector;
