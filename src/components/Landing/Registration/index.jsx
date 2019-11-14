import React from 'react';
import {Redirect, Route} from "react-router-dom";
import Logo from "./atoms/Logo";
import Email from "./Email";
import Password from "./Password";

const RegistrationPage = () => <>
    <Logo src="" alt=""/>
    <Route path="/registration/email">
        <Email/>
    </Route>
    <Route path="/registration/password">
        <Password/>
    </Route>
    <Route exact path="/registration">
        <Redirect to="/registration/email"/>
    </Route>
</>;

export default React.memo(RegistrationPage);