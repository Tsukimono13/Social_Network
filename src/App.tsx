import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./redux/State";


type PropsType={
    store: StoreType
}
const App: React.FC<PropsType>=(props) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>

                    <Route path={"/dialogs"}
                           render={() => <Dialogs dialogsPage={state.dialogsPage} />}/>
                    <Route path={"/profile"} render={() => <Profile posts={state.profilePage} dispatch={props.store.dispatch.bind(props.store)}/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
