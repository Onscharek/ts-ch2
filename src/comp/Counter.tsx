import React, { Component } from 'react'

export default class counter extends Component {
    state = {
        count: 0
        }; 


        increment = () => {
            this.setState({ count: this.state.count + 1 }); 
           }; 

           
        decrement = () => {
            if ( this.state.count >= 1) {
                this.setState({ count: this.state.count - 1 ,}); 
                
            }}




  render() {
    return (
      <div>
        <button onClick={this.decrement}>decrement</button> 

        <p>Count: {this.state.count}</p> 

<button onClick={this.increment}>Increment</button> 
      </div>
    )
  }
}
