import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "GoodBye",
    });
  }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}>Bind Event</button>
      </>
    );
  }
}

export default EventBind;
