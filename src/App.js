import React, {Component} from 'react';
import CardList from './components/Cardlist'
import Searchbox from './components/Searchbox'
import {robots} from './robots'

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      input: ""
    }
  }
  handleInput = (e) => {
    this.setState({ input: e.target.value })
  }

  render () {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.input.toLowerCase())
    })
    return (
      <div className="tc">
        <div className="header">
          <h1>Robofriends</h1>
          <Searchbox inputChange={this.handleInput} />
        </div>
        <CardList robots={filteredRobots} />

      </div>
      );
  }
}

export default App;
