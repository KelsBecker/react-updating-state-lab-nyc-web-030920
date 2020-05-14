import React, { Component } from "react";

// Code DigitalClicker Component Here
class DigitalClicker extends Component {

    state = {
        timesClicked: 0
    }

    countClicks = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }

    render() {
        return (
            <button onClick={this.countClicks}>TIMES CLICKED: {this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker