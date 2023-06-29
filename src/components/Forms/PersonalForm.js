import { Component } from "react";

class PersonalForm extends Component {
    render () {
       return (
        <>
            <div className="personalInfo-container">
                <div className="infoTitle">
                    <h3>Personal Information</h3>
                </div>
                <div className="nameField">
                    <div className="field">
                        <label>First Name</label>
                        <input type="text" name="firstName" className="firstname-input" placeholder="First Name"></input>
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input type="text" name="lastName" className="lastname-input" placeholder="Last Name"></input>
                    </div>
                </div>
                <div className="field">
                    <label>Job Title</label>
                    <input type="text" name="jobTitle" className="jobtitle-input" placeholder="Job Title"></input>
                </div>
                <div className="field">
                    <label>Phone Number</label>
                    <input type="text" name="phoneNumber" className="phonenumber-input" placeholder="Phone Number"></input>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" className="email-input" placeholder="Email"></input>
                </div>
                <div className="field">
                    <label>Description</label>
                    <textarea type="text" name="description" cols={30} rows={5} placeholder="Describe yourself"></textarea>
                </div>
            </div>
       </>)
    }
}

export default PersonalForm