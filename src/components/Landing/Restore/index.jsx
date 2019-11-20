import React from 'react';
import {Redirect, Route} from "react-router-dom";
import Logo from "../Authorization/atoms/Logo";
import Login from "./Login";
import Message from "./Message";
import Password from "./Password";

const Restore = () => <>
    <Logo src="" alt=""/>
    <Route path="/restore/login">
        <Login/>
    </Route>
    <Route path="/restore/message">
        <Message/>
    </Route>
    <Route path="/restore/password">
        <Password/>
    </Route>
    <Route exact path="/restore">
        <Redirect to="/restore/login"/>
    </Route>
</>;

export default React.memo(Restore);