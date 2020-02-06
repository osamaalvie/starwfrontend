import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-globally'
import Button from './Button'
import Navigate from "./Navigate";

const initialState = {
    counter: 0,
    HOST: "https://starwar-backend.herokuapp.com",
    height: 300,
    width: 100,
    // timeout: 6000,
    visible: false
};

function App() {

    return (
        <Provider globalState={initialState}>
            <div className="App">
                <header className="App-header">
                    <img src="logo.svg" className="App-logo" alt="logo"/>
                    <div className="col-md-6">
                        <Button/>
                        <Navigate/>
                    </div>
                </header>
                <div className="content">


                </div>
            </div>
        </Provider>
    );
}


export default App;
