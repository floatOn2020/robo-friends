import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/Cardlist';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import 'tachyons'

import{setSearchField, requestRobots} from '../actions'

const mapStateToProps = state => {
  return{
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => {
 return {
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => requestRobots(dispatch)
}}

class App extends Component {

  componentDidMount(){
    this.props.onRequestRobots();

  }

  render() {
    const {searchField, onSearchChange, robots, isPending} = this.props
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return isPending ?
      <h1>LOADING</h1> :
      (
        <div className="tc ">
          <h1 className='f1'> Robo Friends</h1>
          <SearchBox searchChange={onSearchChange} searchField={searchField}/>
         <Scroll>
           <ErrorBoundry>
              <CardList robots={filteredRobots}/>
           </ErrorBoundry>
         </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
