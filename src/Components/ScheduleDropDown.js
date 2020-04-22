import React from "react";

// function ScheduleDropDown(){
//     return (
//         <React.Fragment>
//             <h2>Find Where We'll Be</h2>
//             <select>
//                 <option>Sunday</option>
//                 <option>Monday</option>
//                 <option>Tuesday</option>
//                 <option>Wednesday</option>
//                 <option>Thursday</option>
//                 <option>Friday</option>
//                 <option>Saturday</option>
//             </select>
//             <button>Find Us</button>
//         </React.Fragment>
//     );
// }


// export default ScheduleDropDown;

class ScheduleDropDown  extends React.Component {
    constructor(props) {
      super(props);
    //   this.state = {value: 'sunday'};
      this.state = { 
        value: "sunday", 
        // days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] 
        days: [
            {id: "1" , day: "Sunday" },
            {id: "2" , day: "Monday" },
            {id: "3" , day: "Tuesday" },
            {id: "4" , day: "Wednesday" },
            {id: "5" , day: "Thursday" },
            {id: "6" , day: "Friday" },
            {id: "7" , day: "Saturday" }
        ]
      };
  
    //   this.handleChange = this.handleChange.bind(this);       
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    // handleChange(event) {
    //   this.setState({value: event.target.value});
    // }

    handleChange = event => {
        this.setState({ value: event.target.value });
    }
  
    handleSubmit(event) {
      alert('the day of the week is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
        const days = require("./ScheduleList")
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick a Day to Find Us: <br />
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="sunday">Sunday</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
            </select>
          </label>
          <br />
          <br />
          {/* new dropdown list using list array in dummy data */}
          <label>
              Looping Through an Array
              <select>
                  {this.state.days.map(item => (
                      <option key={item.id} value={item.day}>
                          {item.day}
                      </option> 
                   ))}
                   {console.log(this.state.days)}
              </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default ScheduleDropDown;