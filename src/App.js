import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src="logo.svg" className="App-logo" alt="logo"/>
                <div className="col-md-4">
                    <Button/>
                </div>
            </header>
            <div className="content">


            </div>
        </div>
    );
}


export default App;
