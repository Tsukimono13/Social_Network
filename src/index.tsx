import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {subscribe} from './redux/State'

const renderTree = () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}

subscribe(renderTree);


