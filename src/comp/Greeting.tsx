import React, { Component } from 'react'

export default class Greeting extends Component {

    state = {
        name: "ons"
        }; 

  render() {
    
    return (

      <div>
              <h1>Hello: {this.state.name}</h1> 

      </div>

    )
  }
}


// const Greeting = ({ name }) => { 
// return <div>Hello, {name}!</div>;
//  };
//  export default Greeting;