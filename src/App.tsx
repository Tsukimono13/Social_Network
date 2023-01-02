import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsType, MessageType, PostsArType} from "./index";

export type PostTypeForApp = {
    posts: Array<PostsArType>
    dialogs: Array<DialogsType>
    message: Array<MessageType>
}

function App(props: PostTypeForApp) {

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>

                    <Route path={"/dialogs"}
                           render={() => <Dialogs dialogs={props.dialogs} messages={props.message}/>}/>
                    <Route path={"/profile"} render={() => <Profile posts={props.posts}/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

export class PostsType {
}