import React, {Component} from 'react';

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

       // console.log(data);

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


}

export default Table;