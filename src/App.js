import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'
import Navigate from "./Navigate";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src="logo.svg" className="App-logo" alt="logo"/>
                <div className="col-md-4">
                    <Button/>
                    <Navigate/>
                </div>
            </header>
            <div className="content">


            </div>
        </div>
    );
}


export default App;
