import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserId"
import axios from "axios";
import {useCookies} from 'react-cookie';

export const StudentProfile = () => {
  const [rosters, setRosters] = useState([]);
  // const [savedRosters, setSavedRosters] = useState([]);
  // const [cookies,_] = useCookies(["access_token"]);

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

    fetchRoster();
  }, []);


return (
  <div>
    <h1>Roster</h1>
    <ul>
      {rosters.map((roster) =>(
        <li key={roster._id}>
          <div>
            <h2>{roster.studentName}</h2>
          </div>

          <div className="notesOnStudent">
            <p>{roster.notesOnStudent}</p>
          </div>
          <img src={roster.studentPhoto} alt={roster.studentName} />
          <p>Abcences: {roster.absences}days</p>
          </li>
      ))}
    </ul>
  </div>
)
};

