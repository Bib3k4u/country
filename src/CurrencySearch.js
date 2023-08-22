import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencySearch = () => {
  const [currencyCode, setCurrencyCode] = useState('');
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    if (currencyCode) {
      axios.get(`https://restcountries.com/v3.1/currency/${currencyCode}`)
        .then(response => {
          setCountryData(response.data);
        })
        .catch(error => {
          console.error('Error fetching country data:', error);
        });
    }
  }, [currencyCode]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter currency code"
        value={currencyCode}
        onChange={e => setCurrencyCode(e.target.value)}
      />
      {countryData && countryData.length > 0 && (
        <div>
          <h2>Countries using {currencyCode} currency:</h2>
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

export default CurrencySearch;
