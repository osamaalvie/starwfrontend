import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-globally'
import Button from './Button'
import Navigate from "./Navigate";

const initialState = {
    counter: 0,
    HOST: "https://starwar-backend.herokuapp.com"
};

function App() {

    return (
        <Provider globalState={initialState}>
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
        </Provider>
    );
}


export default App;
