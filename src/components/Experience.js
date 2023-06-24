import { Component } from "react";

class Experience extends Component {
    render() {
        return (
            <>
                <div className="experience-container">
                    <div className="experienceTitle">
                        <h3>Experience</h3>
                    </div>
                    <div className="field">
                        <label>Company</label>
                        <input type="text" name="company" className="company-input" placeholder="Company"></input>
                    </div>
                    <div className="field">
                        <label>Position</label>
                        <input type="text" name="position" className="position-input" placeholder="Position"></input>
                    </div>
                    <div className="field">
                        <label>Location</label>
                        <input type="text" name="location" className="location-input" placeholder="Location"></input>
                    </div>
                    <div className="yearsAttended">
                        <div className="field">
                            <label>From</label>
                            <input type="text" name="startYear" className="startYear-input" placeholder="Hired In (MM/YYYY)"></input>
                        </div>
                        <div className="field">
                            <label>To</label>
                            <input type="text" name="endYear" className="endYear-input" placeholder="Left In (MM/YYYY)"></input>
                        </div>
                    </div>
                    <div className="buttons">
                        <button id="experienceAddBtn">Add</button>
                        <button id="experienceDeleteBtn">Delete</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Experience