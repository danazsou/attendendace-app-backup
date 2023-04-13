import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserId"
import axios from "axios";

export const SavedRoster = () => {
  const [savedRoster, setSavedRoster] = useState([]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRoster = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/roster/savedRoster/${userID}`
        );
        setSavedRoster(response.data.savedRoster);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRoster();
  }, []);


//   return (
//     <div>
//       <h1>Saved Student Profiles</h1>
//       <ul>
//         {savedRoster.map((roster) => (
//           <li key={roster._id}>
//             <div>
//               <h2>{roster.name}</h2>
//             </div>
//             <div className="notesOnStudent">
//               <p>{roster.notesOnStudent}</p>
//             </div>
//             <img src={roster.studentPhoto} alt={roster.name} />
//             <p>Student Absences: {roster.studentAbsences}days</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export const SavedRoster =() =>{
//     return <div>Student Profiles</div>;
 };