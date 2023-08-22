import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryCapital = () => {
  const [capitalName, setCapitalName] = useState('');
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    if (capitalName) {
      axios.get(`https://restcountries.com/v3.1/capital/${capitalName}`)
        .then(response => {
          setCountryData(response.data);
        })
        .catch(error => {
          console.error('Error fetching country data:', error);
        });
    }
  }, [capitalName]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter capital city"
        value={capitalName}
        onChange={e => setCapitalName(e.target.value)}
      />
      {countryData && countryData.length > 0 && (
        <div>
          <h2>Country with capital city {capitalName}:</h2>
          <ul>
            {countryData.map(country => (
              <li key={country.cca3}>{country.name.common}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountryCapital;
