import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserId"
import axios from "axios";

export const ClassList = () => {
  const [roster, setRoster] = useState([]);
  const [savedRoster, setSavedRoster] = useState([]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchRoster = async () => {
      try {
        const response = await axios.get("http://localhost:3001/create-class");
        setRoster(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRoster = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/create-class/savedCreateClass/ids/${userID}`
        );
        setSavedRoster(response.data.savedRoster);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRoster();
    fetchSavedRoster();
  }, []);

  const saveRoster = async (rosterID) => {
    try {
      const response = await axios.put("http://localhost:3001/create-class", {
        rosterID,
        userID,
      });
      setSavedRoster(response.data.savedRoster);
    } catch (err) {
      console.log(err);
    }
  };

  const isRosterSaved = (id) => savedRoster.includes(id);

  return (
    <div>
      <h1>Class Roster</h1>
      <ul>
        {roster.map((roster) => (
          <li key={roster._id}>
            <div>
              <h2>{roster.name}</h2>
              <button
                onClick={() => saveRoster(roster._id)}
                disabled={isRosterSaved(roster._id)}
              >
                {isRosterSaved(roster._id) ? "Saved" : "Save"}
              </button>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};