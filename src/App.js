import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from './robots';
import SearchBox from "./SearchBox";
import './app.css';



class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    //always have non-native functions to be formatted as  
    //per below to avoid 'undefined state' error
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        // console.log(filteredRobots);
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        return (
            <div>
                <h1 className="tc f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div >
        );
    }
}

export default App;