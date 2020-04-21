import React from "react";

function ScheduleDropDown(){
    return (
        <React.Fragment>
            <h2>Find Where We'll Be</h2>
            <select>
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
            </select>
            <button>Find Us</button>
        </React.Fragment>
    );
}


export default ScheduleDropDown;