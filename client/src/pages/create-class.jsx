import { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserId";
import { useNavigate } from "react-router-dom";

export const CreateClass =() =>{
    const userID = useGetUserID(); //using hook

    const [roster, setRoster] = useState({
        studentName: "",
        courses: [],
        notesOnStudent:"",
        studentPhoto: "",
        absences: 0,
        userOwner: userID, 
    }); //state that keeps track of roster we are creating
        //put on inituial structure of how object will look

        const navigate = useNavigate();

        const handleChange = (event)=>{
            const {name, value} = event.target; //name = name property of each input for the forms
            setRoster({...roster,[name]: value});
        };

        const handleCourseChange = (event, idx)=>{
            const {value} = event.target;
            const courses = roster.courses;
            courses[idx] = value;
            setRoster({...roster,courses});
        };

        const addCourse = () => {
            setRoster({...roster, courses: [...roster.courses, ""] }) //setting courses object to be the same as it was before but whatever is after the comma is what id going to change in the object
        };

        const onSubmit= async (event) => {
            event.preventDefault();
            try{
                //console.log(roster)
             await axios.post("http://localhost:3001/roster",roster);
             alert("Student Profile Created!")
             navigate("/student-profiles");
            }catch(err) {
             console.error(err);

            }
        };

        return (
            <div className="create-class">
                <h2>Create Class Roster</h2> 
                <form onSubmit={onSubmit}>
                    <label htmlFor="studentName">Student Name</label>
                    <input type="text" id="studentName" name = "studentName" onChange={handleChange} />
        
                   
                    <label htmlFor="enrolledSubjects">Enrolled Courses</label>
                      
                      {/* //adding course and index of that course */}
                    {roster.courses.map((course, idx) => (
                        <input key={idx} type="text" 
                        name="courses" value={course}
                        onChange={(event) => handleCourseChange(event, idx)}/>
                    ))}
                    <button onClick={addCourse}type="button">
                        Add Subject </button>
        
                    <label htmlFor="notesOnStudent">Notes on Student</label>
                    <textarea id="notesOnStudent" name="notesOnStudent" onChange={handleChange}></textarea>
                    <label htmlFor="studentPhoto">Student Profile Picture</label>
                    <input type="text" id="studentPhoto" name="studentPhoto" onChange={handleChange}/>
                    <label htmlFor="absences">Total Absences</label>
                    <input type="number" id="absences" name="absences" onChange={handleChange}/>
                    
                    <button type="submit">
                        Create Student Profile</button>
                </form>
                </div>
            );
        };