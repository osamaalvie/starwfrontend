import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src="logo.svg" className="App-logo" alt="logo"/>
                <div className="col-md-4">
                    <button className="btn btn-warning btn-block" onClick={fetch}>Search</button>
                </div>
            </header>
            <div className="content">


            </div>
        </div>
    );
}

function fetch() {

}

export default App;
