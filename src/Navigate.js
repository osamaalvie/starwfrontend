import React, {Component} from 'react';
import {withGlobalState} from 'react-globally'

// import axios from 'axios';

class Navigate extends Component {

    constructor(props) {
        console.log("Footer Constructor");
        super(props);
        this.state = {
            page: 1,
            count: 0,
            // title: "",
            titles: [
                "Which of all Star Wars movies has the longest opening crawl?",
                "What character (person) appeared in most of the Star Wars films?",
                "What species (i.e. characters that belong to certain species) appeared in the most number of Star Wars films?",
                "What planet in Star Wars universe provided largest number of vehicle pilots?"
            ]
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.setState({

            title: this.state.titles[0],


        });
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }


    render() {
        console.log("render");

        return <div className="col-md-12 align-items-center">
            <br/>
            <p>{this.state.titles[this.state.count]}</p>
            <button id="btnPrev" className="btn btn-link fa-angle-left mr-1" onClick={this.prev}>Prev</button>
            <span>{this.state.page}/4</span>
            <button id="btnNext" className="btn btn-link fa-angle-right ml-1" onClick={this.next}>Next
            </button>
            <br/> <br/>
            <div id="table"></div>
        </div>;
    }

    prev = () => {

        if (this.state.page > 1) {
            // console.log(this.state.page--);
            this.setState({
                page: this.state.page - 1,
                count: this.state.count - 1,
                title: this.state.titles[this.state.count]

            });

            this.props.setGlobalState(prevGlobalState => ({
                counter: prevGlobalState.counter - 1
            }))
        }


    };

    next = () => {
        // console.log(this.state.page);
        if (this.state.page < 4) {

            this.setState({
                page: this.state.page + 1,
                count: this.state.count + 1,
                title: this.state.titles[this.state.count]

            });
            this.props.setGlobalState(prevGlobalState => ({
                counter: prevGlobalState.counter + 1
            }))

        }

    };


}

export default withGlobalState(Navigate)