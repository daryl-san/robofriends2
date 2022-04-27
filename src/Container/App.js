import React, { Component } from "react";
import CardList from "../Component/CardList";
import SearchBox from "../Component/SearchBox";
import './app.css';
import Scroll from '../Component/Scroll.js';


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
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        })
        if (!robots.length) {
            return <h1>Loading</h1>
        } else {
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
}

export default App;