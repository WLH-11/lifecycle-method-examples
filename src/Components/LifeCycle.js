import React, {Component} from 'react';

class LifeCycle extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    //componentDidMount fires after the initial render
    componentDidMount(){
        console.log('componentDidMount Fired')
    }

    //componentDidUpdate doesn't fire during the initial render, but after each render beyond that
    componentDidUpdate(){
        console.log('componentDidUpdate Fired')
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    //render fires every time state changes
    render(){
        console.log('Render Fired')
        return(
            <div>
                <h1>Lifecycle Examples</h1>
                <p>{this.state.count}</p>
                <button onClick={this.increaseCount}>Increase Count</button>
            </div>
        )
    }
}

export default LifeCycle;