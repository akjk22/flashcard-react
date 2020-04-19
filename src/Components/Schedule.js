import React from "react";

function Schedule(props){
    return (
        <React.Fragment>
            <h3>{props.day}</h3>
            <p>{props.location}</p>
            <p>{props.hours}</p>
            <p>{props.booth}</p>
            <hr/>
        </React.Fragment>
    );
}

export default Schedule;