import React from 'react';
import Logo from "./Logo";
import {Redirect, Route} from "react-router-dom";
import Email from "./Email";

const RegistrationPage = () => <>
    <Logo src="" alt=""/>
    <Redirect to="/registration/email"/>
    <Route path="/registration/email">
        <Email/>
    </Route>
</>;

export default RegistrationPage;