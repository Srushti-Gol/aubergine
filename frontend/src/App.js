import React, { useState, useEffect } from 'react';
import Input from './component/Input';
import Dropdown from './component/Dropdown';
import Card from './component/Card';
import './component/style.css';

const App = () => {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');

  const searchByCountry = () => {
    fetch(`http://localhost:5000/api/universities?country=${country}`).then(response => response.json()).then(data => {
        setUniversities(data);
        const uniqueProvinces = [...new Set(data.map(uni => uni['state-province']))].filter(Boolean);
        setProvinces(uniqueProvinces);
        setSelectedProvince(''); // reset province
        setFilteredUniversities(data); // set the filtered universities to all fetched universities initially
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    if (selectedProvince) {
      setFilteredUniversities(universities.filter(u => u['state-province'] === selectedProvince));
    } else {
      setFilteredUniversities(universities);
    }
  }, [selectedProvince, universities]);

  return (
    <>
      <Input country={country} setCountry={setCountry} searchByCountry={searchByCountry} />
      {country && provinces.length > 0 && (
        <Dropdown provinces={provinces} selectedProvince={selectedProvince} setSelectedProvince={setSelectedProvince} />
      )}
      <div className="university-cards">
        {filteredUniversities.map(u => (
          <Card key={u.name} university={u} />
        ))}
      </div>
    </>
  );
};

export default App;
