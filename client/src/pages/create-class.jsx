// export const CreateClass =() =>{
//     return <div>Create Class Roster</div>;
// };

import { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserId";
import { useNavigate } from "react-router-dom";

export const CreateClass =() =>{
    const userID = useGetUserID();

    const [roster, setRoster] = useState({
        Subject: "",
        FirstName: "",
        LastName: "",
        userOwner: userID ,
    }); //state that keeps track of roster we are creating
        //put on inituial structure of how object will look

        const navigate = useNavigate();

        const handleChange = (event)=>{
            const {name, value} = event.target;
            setRoster({...roster,[name]: value});
        };

        const handleFirstNameChange = (event, idx)=>{
            const {value} = event.target;
            const FirstName = roster.FirstName;
            FirstName[idx] = value;
            setRoster({...roster,FirstName});
        };

        const addFirstName = () => {
            setRoster({...roster, FirstName: [...roster.FirstName, ""] }) //setting recipe object to be the same as it was before but whatever is after the comma is what id going to change in the object
        };

        const onSubmit= async (event) => {
            event.preventDefault();
            try{
             await axios.post("http://localhost:3001/create-class", roster);
             alert("Recipe Created!")
             navigate("/");
            }catch(err) {
             console.error(err);

            }
        };

    return (
    <div className="create-roster">
        <h2>Create Class Roster</h2> 
        <form onSubmit={onSubmit}>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name = "subject" onChange={handleChange} />

           
            <label htmlFor="FirstName">First Name</label>

            {roster.FirstName.map((FirstName, idx) => (
                <input key={idx} type="text" 
                name="FirstName" value={FirstName}
                onChange={(event) => handleFirstNameChange(event, idx)}/>
            ))}
            <button onClick={addFirstName}type="button">
                Add Another Name</button>

            <label htmlFor="LastName">Last Name</label>
            <textarea id="LastName" name="LastName" onChange={handleChange}></textarea>
           
            
            <button type="submit">
                Create Class Roster</button>
        </form>
        </div>
    );
};