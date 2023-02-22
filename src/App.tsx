import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./redux/Store";
import {store} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersWithoutClass from "./components/Users/UsersWithoutClass";
import UsersContainer from "./components/Users/UsersContainer";


function App(){

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>

                    <Route path={"/dialogs"}
                           render={() => <DialogsContainer/>}/>
                    <Route path={"/profile"} render={() => <Profile/>} />
                    <Route path={"/users"} render={() => <UsersContainer/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
