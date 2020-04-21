import React from 'react';
// import NewTicketForm from './NewTicketForm';
// import TicketList from './TicketList';
import ScheduleList from './ScheduleList';
import NewSchedulePage from './NewSchedulePage';

class ScheduleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scheduleVisibleOnPage: false
  
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      scheduleVisibleOnPage: !prevState.scheduleVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.scheduleVisibleOnPage) {
      currentlyVisibleState = <NewSchedulePage />
      buttonText = "Return to Home Page";
    } else {
      currentlyVisibleState = <ScheduleList />
      buttonText = "Find Us";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}



export default ScheduleControl;