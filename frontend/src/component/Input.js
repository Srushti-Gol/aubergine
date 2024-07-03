import React from 'react';
import './style.css';

const Input = ({country,setCountry,searchByCountry}) => (
  <div>
    <input 
      type="text" 
      placeholder="Secrch Your Desire Country" 
      value={country} 
      onChange={(e) => setCountry(e.target.value)} 
    />
    <button onClick={searchByCountry}>Search</button>
  </div>
);

export default Input;
