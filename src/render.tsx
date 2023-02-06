import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {StateType} from './redux/State'

export const renderTree = (state: StateType) => {
    ReactDOM.render(
            <App/>,
        document.getElementById('root')
    );
}


