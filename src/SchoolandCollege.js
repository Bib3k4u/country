import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SchoolandCollege = () => {
  const [data, setData] = useState([]);
  const apiKey = '579b464db66ec23bdd000001c5b6e138645744c077c4db3ccad8b1ec';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.data.gov.in/resource/6e9fff80-5242-4672-94ee-b488bda00eb8?api-key=${apiKey}&format=json`
        );
        setData(response.data.records);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>District-wise Schools and Colleges Data (2020-21)</h1>
      <table>
        <thead>
          <tr>
            <th>District</th>
            <th>Number of Schools</th>
            <th>Number of Colleges</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.district}</td>
              <td>{item.total_schools}</td>
              <td>{item.total_colleges}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchoolandCollege;
