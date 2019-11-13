import React from 'react';

export default class HelloWorld extends React.Component {
  state = {
    who: 'world'
  }

  handleWorldClick = e => {
    this.setState({
      who: 'world'
    })
  }

  handleReactClick = e => {
    this.setState({
      who: 'React'
    })
  }

  handleFriendClick = e => {
    this.setState({
      who: 'friend'
    })
  }
  
  render() {
    return (
      <div>
        <p>Hello, {this.state.who}!</p>
        <button onClick={this.handleWorldClick}>World</button>
        <button onClick={this.handleReactClick}>React</button>
        <button onClick={this.handleFriendClick}>Friend</button>
      </div>
      
    )
  }
}