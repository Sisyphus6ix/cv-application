import { Component } from "react";

export const getInfo = () => {
    let instituition = document.getElementsByClassName('instituition-input')
    console.log(instituition, 'EducationForm')
     alert('Button works')
 }

class EducationForm extends Component {
    render() {
        return (
            <>
                <div className="education-container">
                    <div className="educationTitle">
                        <h3>Education</h3>
                    </div>
                    <div className="field">
                        <label>Institution Name</label>
                        <input type="text" name="institution" className="instituion-input" placeholder="Institution Name"></input>
                    </div>
                    <div className="field">
                        <label>Location</label>
                        <input type="text" name="location" className="location-input" placeholder="City, State"></input>
                    </div>
                    <div className="field">
                        <label>Degree</label>
                        <input type="text" name="degree" className="degree-input" placeholder="Degree"></input>
                    </div>
                    <div className="field">
                        <label>Subject</label>
                        <input type="text" name="subject" className="subject-input" placeholder="Subject"></input>
                    </div>
                    <div className="yearAttended">
                        <div className="field">
                            <label>From</label>
                            <input type="text" name="startYear" className="startYear-input" placeholder="Started Attending In (MM/YYYY)"></input>
                        </div>
                        <div className="field">
                            <label>To</label>
                            <input type="text" name="endYear" className="endYear-input" placeholder="Stopped Attending In (MM/YYYY)"></input>
                        </div>
                    </div>
                    <div className="buttons">
                        <button id="educationAddBtn" onClick={getInfo}>Add</button>
                        <button id="educationDeleteBtn">Delete</button>
                    </div>
                </div>
            </>
        )
    }
}

export default EducationForm