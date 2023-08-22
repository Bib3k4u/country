import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryList = () => {
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    if (countryName) {
      axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then(response => {
          setCountryData(response.data);
        })
        .catch(error => {
          console.error('Error fetching country data:', error);
        });
    }
  }, [countryName]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter country name"
        value={countryName}
        onChange={e => setCountryName(e.target.value)}
      />
      {countryData && (
        <div>
          <h2>{countryData[0].name.common}</h2>
          {/* Render other country data as needed */}
        </div>
      )}
    </div>
  );
};

export default CountryList;
