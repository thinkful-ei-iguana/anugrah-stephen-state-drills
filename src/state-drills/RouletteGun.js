import React from 'react';

export default class RouletteGun extends React.Component {

  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false,
  };

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  handleTrigger = () => {
    this.setState({
      spinningTheChamber: true,
    })
    this.timeout = setTimeout(() => {
      const newChamber = Math.ceil(Math.random() * 8)
      this.setState({
        chamber: newChamber,
        spinningTheChamber: false,
      })
    }, 2000)
  }

  displayContent() {
    const { chamber, spinningTheChamber } = this.state
    const { bulletInChamber } = this.props
    if (spinningTheChamber) {
      return (
        'Spinning the chamber and pulling the trigger! ...'
      )
    } else if (chamber === bulletInChamber) {
      return 'BANG!!!!'
    } else {
      return 'You\'re safe!'
    }
  }

  render() {
    return (
      <div className='roulette-gun-container'>
        <p>{this.displayContent()}</p>
        <button onClick={this.handleTrigger}>Pull the trigger!</button>
      </div>
    )
  }
}

