import React, { Component } from 'react';


class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ageCard: this.props.ageCard,
            youngPerson: "You are a person"
        }
    }

    AddAge = () => {
        this.state.ageCard -= 1;
        this.setState({ageCard: this.state.ageCard});
        if(this.state.ageCard <= 0){
            this.setState({youngPerson: "You don't exist"})
        }
    }
    render(){
        return(
            <div>
                <h1>{ this.props.firstName } { this.props.lastName }</h1>
                <p>Age: { this.state.ageCard}</p>
                <p>Hair Color: { this.props.hairColor }</p>
                <button onClick = { this.AddAge }>Birthday Button for {this.props.firstName}</button>
                <h4>{ this.state.youngPerson }</h4>
                <hr></hr>
            </div>
        )
    }
}


export default PersonCard;
