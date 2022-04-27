import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from './robots';
import SearchBox from "./SearchBox";
import './app.css';
import Scroll from './Scroll.js';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { this.setState({ robots: users }) });
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
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div >
        );
    }
}

export default App;