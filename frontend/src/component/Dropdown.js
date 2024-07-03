import React from 'react';
import './style.css';

const Dropdown = ({ provinces, selectedProvince, setSelectedProvince }) => (
  <>
    <select 
      value={selectedProvince} 
      onChange={(e) => setSelectedProvince(e.target.value)}
    >
      <option value="">Select province</option>
      {provinces.map((province, index) => (
        <option key={index} value={province}>{province}</option>
      ))}
    </select>
  </>
);

export default Dropdown;
