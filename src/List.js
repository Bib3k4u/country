import React, { useState, useEffect } from 'react';
import axios from 'axios';

const List = () => {
  const [colleges, setColleges] = useState([]);
  const [filter, setFilter] = useState('');
  const apiKey = '579b464db66ec23bdd000001c5b6e138645744c077c4db3ccad8b1ec';

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await axios.get(
          `https://api.data.gov.in/resource/44bea382-c525-4740-8a07-04bd20a99b52?api-key=${apiKey}&format=json&limit=1000`
        );
        setColleges(response.data.records);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchColleges();
  }, []);

  const filteredColleges = colleges.filter((college) =>
    college.college_name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 style={{textAlign: "left"}}>List of Colleges (2012-2013)</h1>
      <input
        type="text"
        placeholder="Search by University Name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: '1rem' }}
      />
      <ul style={{ width: '50%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        {filteredColleges.map((college) => (
          <li key={college.s_no_} style={{ listStyle: 'none' }}>
            {college.s_no_}<strong>. </strong>
            <strong>University:</strong> {college.university_name} <br />
            <strong>College:</strong> {college.college_name} <br />
            <strong>Type:</strong> {college.college_type} <br />
            <strong>State:</strong> {college.state_name} <br />
            <strong>District:</strong> {college.district_name}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
