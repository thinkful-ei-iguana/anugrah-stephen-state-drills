import React from 'react';



export default class Bomb extends React.Component {
    state = {
        count: 0,
    }
    
    componentDidMount() {
        setInterval(() => {
          this.setState({
              count: this.state.count + 1
          })
        }, 1000)
    }

    handleBomb = e => {
        if (this.state.count >= 8) {
            return 'BOOM!!!!'
        }
        else if (this.state.count % 2 === 0) {
            return 'tick';
        }
        else {
            return 'tock';
        }
    }

    render() {
        return (
        <div>
            <p> {this.handleBomb()} </p>
        </div>
        )}


}