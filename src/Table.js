import React, {Component} from 'react';
import {withGlobalState} from "react-globally";

class Table extends Component {

    constructor(props) {
        console.log("Table Constructor");
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        const data = this.props.data.data;
        let rendered = "";
        switch (this.props.counter) {
            case 0:
                rendered = longestCrawl(data);
                break;
            case 1:
                rendered = characterByMostAppearance(data);
                break;
            case 2:
                rendered = speciesByMostAppearance(data);
                break;
            case 3:
                rendered = largestNoOfVehicle(data);
                break;
        }


        return rendered;
    }


}

function longestCrawl(data) {

    const items = [];

    for (const [index, value] of data.entries()) {
        items.push(<tr key={index}>
            <td>{value.title}</td>
            <td>{value.director}</td>
            <td>{value.opening_crawl}</td>
        </tr>)
    }

    return (
        <table className="table table-responsive table-bordered table-primary">
            <thead>
            <tr>
                <th>Title</th>
                <th>Director</th>
                <th>Crawl Length</th>
            </tr>
            </thead>
            <tbody>
            {items}
            </tbody>

        </table>
    );
}

function characterByMostAppearance(data) {
    const items = [];

    for (const [index, value] of data.entries()) {
        items.push(<tr key={index}>
            <td>{value.name}</td>
            <td>{value.films_count}</td>
        </tr>)
    }

    return (
        <table className="table table-responsive table-bordered table-primary">
            <thead>
            <tr>
                <th>Name</th>
                <th>Appearance</th>
            </tr>
            </thead>
            <tbody>
            {items}
            </tbody>

        </table>
    );
}

function speciesByMostAppearance(data) {
    const items = [];

    for (const [index, value] of data.entries()) {
        items.push(<tr key={index}>
            <td>{value.name}</td>
            <td>{value.characters_count}</td>
        </tr>)
    }

    return (
        <table className="table table-responsive table-bordered table-primary">
            <thead>
            <tr>
                <th>Name</th>
                <th>Appearance</th>
            </tr>
            </thead>
            <tbody>
            {items}
            </tbody>

        </table>
    );
}

function largestNoOfVehicle(data) {
    console.log(data);
    const items = [];

    // for (const [index, value] of data.films.entries()) {
    //     items.push(<tr key={index}>
    //         <td>{value.name}</td>
    //         <td>{value.no_of_vehicles}</td>
    //         <td>{value.id}</td>
    //     </tr>)
    // }

    return (
        <table className="table table-responsive table-bordered table-primary">
            <thead>
            <tr>
                <th>Name</th>
                <th>No of Vehicles</th>
                <th>Name & Species</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{data.name}</td>
                <td>{data.no_of_vehicles}</td>
                <td>{data.id}</td>
            </tr>
            </tbody>

        </table>
    );
}

export default Table