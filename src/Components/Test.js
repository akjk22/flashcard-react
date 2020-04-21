import React, { Component } from 'react';
import Schedule from "./Schedule";

export default class Test extends Component {
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
        {this.state.on && <Schedule />}
        <button onClick={this.toggle}>Show/Hide</button>
      </div>
      
    );
  }


}
