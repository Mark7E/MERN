import React, { Component } from "react";

class PropIt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bd: this.props.age
        };
    }
    bDay = () => {
        this.setState({
            bd: this.state.bd + 1
        })
    }
    render() {
        return (
            <>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.bd}</p>
                <p>Hair color: {this.props.hairColor}</p>
                <button onClick={this.bDay}>Birthday!!</button>
            </>
        );
    }
}

export default PropIt;