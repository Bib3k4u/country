import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CollegeList = () => {
    const[college, setCollege] = useState([]);
    useEffect(() => {
        const fetchColleges = async () => {
          try {
            const response = await axios.get(
              `https://api.data.gov.in/resource/44bea382-c525-4740-8a07-04bd20a99b52?api-key=579b464db66ec23bdd000001c5b6e138645744c077c4db3ccad8b1ec&format=json&limit=1000`
            );
            setCollege(response.data.records);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchColleges();
      }, []);

  return (
    <div>
      <ul>
        {
            college.map((college)=>(
                <li key={college.s_no_} style={{ listStyle: 'none' }}>
                    <strong>{college.s_no_}. </strong>                    
                     {college.university_name} <br/>
                     {college.college_name} <br/>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default CollegeList
