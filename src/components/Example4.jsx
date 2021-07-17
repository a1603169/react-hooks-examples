import React, { Component } from 'react'

export default class Example4 extends Component {
  state = {
    count: 0,
  }
  
  render() {
    const {count} = this.state
    return (
      <div>
        <p> You clicked {count} times</p>
        <button onClick={this.click}>Click me</button>
      </div>
    )
  }
  componentDidMount() {
    console.log('cdm', this.state.count)
  }
  componentDidUpdate() {
    console.log('cdu', this.state.count)
  }
  click = () => {
    this.setState({count: this.state.count + 1})
  }
}
