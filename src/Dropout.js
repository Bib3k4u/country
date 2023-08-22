import React, { useState, useEffect } from 'react';

const App = () => {
  const [dropoutData, setDropoutData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.data.gov.in/resource/3eed4dfb-ec70-4b7c-b23c-b55ed5dcc4cb?api-key=579b464db66ec23bdd000001c5b6e138645744c077c4db3ccad8b1ec&format=json'
        );
        const data = await response.json();
        setDropoutData(data.records);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>School Dropout Rates by Age Group (2001-2010)</h1>
      <table>
        <thead>
          <tr>
            <th>Age Group</th>
            <th>Gender</th>
            <th>2001</th>
            <th>2002</th>
            <th>2003</th>
            <th>2004</th>
            <th>2005</th>
            <th>2006</th>
            <th>2007</th>
            <th>2008</th>
            <th>2009</th>
            <th>2010</th>
          </tr>
        </thead>
        <tbody>
          {dropoutData.map((item) => (
            <tr>
              <td>{item.age_slab}</td>
              <td>{item.gender}</td>
              <td>{item._2001}</td>
              <td>{item._2002}</td>
              <td>{item._2003}</td>
              <td>{item._2004}</td>
              <td>{item._2005}</td>
              <td>{item._2006}</td>
              <td>{item._2007}</td>
              <td>{item._2008}</td>
              <td>{item._2009}</td>
              <td>{item._2010}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
