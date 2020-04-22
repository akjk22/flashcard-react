import React, { Component } from 'react';
// import Schedule from "./Schedule";
import Flash from "./Flash";

class Test extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
  })
  }

  render() {
    return(
      <div>
        {this.state.on && <h1>{Flash}</h1>}
        <button onClick={this.toggle}>Show/Hide</button>
      </div>
      
    );
  }


}

export default Test;