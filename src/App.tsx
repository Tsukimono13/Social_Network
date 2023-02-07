import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import state, {updateNewPostText} from "./redux/State";
import {addPost} from "./redux/State"


function App() {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>

                    <Route path={"/dialogs"}
                           render={() => <Dialogs dialogsPage={state.dialogsPage} />}/>
                    <Route path={"/profile"} render={() => <Profile posts={state.profilePage} addPost={addPost} updateNewPostText={updateNewPostText}/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
