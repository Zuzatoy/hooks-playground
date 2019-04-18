import React, { Component }from "react";

class CounterClass extends Component {
    state={
        counter: 0,
    }
    incrementCounter = () => {
        this.setState(state => ({
            counter: state.counter + 1
        }))
    }

    decrementCounter = () => {
        this.setState(state => ({
            counter: state.counter - 1
        }))
    }
    resetCounter = () => {
        this.setState(state => ({
            counter: 0
        }))
    }

    render() {
        return (
            <div>
               <h1>{this.state.counter}</h1>
            <button onClick={this.incrementCounter}>+</button>
            <button onClick={this.decrementCounter}>-</button>
            <button onClick={this.resetCounter}>reset</button>
            </div>
        )
    }
}

export default CounterClass;