import React from 'react';
import {Redirect, Route} from "react-router-dom";
import Email from "./Email";
import Password from "./Password";
import Message from "./Message";

const Registration = () => <>
    <Route path="/landing/registration/email">
        <Email/>
    </Route>
    <Route path="/landing/registration/password/:token">
        <Password/>
    </Route>
    <Route path="/landing/registration/message">
        <Message/>
    </Route>
    <Route exact path="/landing/registration">
        <Redirect to="/landing/registration/email"/>
    </Route>
</>;

export default React.memo(Registration);