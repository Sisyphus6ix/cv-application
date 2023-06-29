// I want to seperate logic of building HTML page in EducationForm and the logic of storing the info and giving my form functionality
// in this file

import React from "react";
import EducationForm from "./EducationForm";

export const getInfo = () => {
   let instituition = document.getElementsByClassName('instituition-input')
    alert('Button works')
    alert(instituition.value)
}

function Education (props) {
    // Trying to add an event to the add button in the education section
    let testBtn = document.getElementById('educationAddBtn')
    
    
    return (
        <EducationForm/>
    )
}

export default Education