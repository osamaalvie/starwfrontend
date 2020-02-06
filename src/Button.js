import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {withGlobalState} from 'react-globally'
import axios from 'axios';
import Table from "./Table";

class Button extends Component {

    constructor(props) {
        console.log("Button Constructor");
        //console.log(props);
        super(props);
        this.state = {
            urls: [
                "/api/movies/byLongestCrawl",
                "/api/movies/characterByMostAppearance",
                "/api/movies/speciesByMostAppearance",
                "/api/movies/largestNoOfVehicle",
            ]
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        console.log("Button render");
        return <button className="btn btn-warning btn-block" onClick={this.fetch}>Search</button>;
    }

    fetch = () => {
        const url = this.props.globalState.HOST + this.state.urls[this.props.globalState.counter];

        axios.get(url, {
            headers: {},

        })
            .then((response) => {
                // console.log(response);

                ReactDOM.render(<Table data={response}
                                       counter={this.props.globalState.counter}/>, document.getElementById('table'));


            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.headers);
                }
                else if (error.request) {
                    console.log(error.request);
                }
                else {
                    console.log(error.message);
                }


            });
    }

}

export default withGlobalState(Button)