import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserId"
import axios from "axios";
import {useCookies} from 'react-cookie';

export const StudentProfile = () => {
  const [rosters, setRosters] = useState([]);
  // const [savedRosters, setSavedRosters] = useState([]);
   const [cookies,_] = useCookies(["access_token"]);

  // const userID = useGetUserID();

  useEffect(() => {
    const fetchRoster = async () => {
      try {
        const response = await axios.get("http://localhost:3001/roster");
        setRosters(response.data);//return the list of rosters
        //console.log(response.data), data catching properly after this
      } catch (err) {
        console.log(err);
      }
    };

    if(cookies.access_token)
    fetchRoster();
  }, []);


return (
  <div>
    <h1>Student Profiles</h1>
    <ul>
      {rosters.map((roster) =>(
        <li key={roster._id}>
          <div>
            <h2>{roster.studentName}</h2>
          </div>
          <img src={roster.studentPhoto} alt={roster.studentName} />
          <div className="notesOnStudent">
            <p>NOTES: {roster.notesOnStudent}</p>
          </div>

          <div> 
            <p>Courses Currently Enrolled: {roster.courses}</p>
          </div>
     
          <p>Abcences: {roster.absences} Days</p>

          <button>Edit Profile</button>
          <button>Delete Profile</button>
          </li>
          
      ))}
    </ul>
  </div>
)
};

