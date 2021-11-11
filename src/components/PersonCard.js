import React from "react";

class PersonCard extends React.Component {    

    constructor(props) {
        super(props);
        this.state = {
            firstName: props.firstName,
            lastName: props.lastName, 
            age: props.age, 
            hairColor: props.hairColor
        };
    }

    render() {
        // const { firstName, lastName, age, hairColor} = this.props;
        return (
            <ul>
                <li><h1>{ this.state.lastName }, { this.state.firstName }</h1></li>
                <li><p>Age: { this.state.age }</p></li>
                <li><p>Hair Color: { this.state.hairColor }</p></li>
                <button onClick={ this.addAge }>Birthday Button for { this.state.firstName } { this.state.lastName }</button>
            </ul>
        )
    }

    addAge = () => {
        this.setState({ age: this.state.age + 1 });
        //console.log('add age', this.state.age);
    }
}

export default PersonCard