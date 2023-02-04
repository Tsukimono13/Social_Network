import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import state, {StateType} from "./redux/State";


function App() {

    let posts = state.profilePage.posts

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>

                    <Route path={"/dialogs"}
                           render={() => <Dialogs dialogsPage={state.dialogsPage}/>}/>
                    <Route path={"/profile"} render={() => <Profile posts={posts}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
