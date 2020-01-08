import React from 'react';
import {Redirect, Route} from "react-router-dom";
import Login from "./Login";
import Message from "./Message";
import Password from "./Password";

const Restore = () => <>
    <Route path="/landing/restore/login">
        <Login/>
    </Route>
    <Route path="/landing/restore/message">
        <Message/>
    </Route>
    <Route path="/landing/restore/password/:token">
        <Password/>
    </Route>
    <Route exact path="/landing/restore">
        <Redirect to="/landing/restore/login"/>
    </Route>
</>;

export default React.memo(Restore);