import React, {Component} from 'react';
import CardList from '../components/Cardlist'
import Scroll from '../components/Scroll'
import Searchbox from '../components/Searchbox'
import {robots} from '../robots'

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      input: ""
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots: users }));
  }

  handleInput = (e) => {
    this.setState({ input: e.target.value })
  }

  render () {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.input.toLowerCase())
    })
    return !this.state.robots.length ?
       <h1>Loading...</h1> :
         (
          <div className="tc">
            <div className="header">
              <h1>Robofriends</h1>
              <Searchbox inputChange={this.handleInput} />
            </div>
            <Scroll>
              <CardList robots={filteredRobots} />
            </Scroll>
          </div>
          );
  }
}

export default App;
