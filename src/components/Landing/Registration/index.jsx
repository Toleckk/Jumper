import React from 'react';
import {Redirect, Route} from "react-router-dom";
import Email from "./Email";
import Password from "./Password";
import Message from "./Message";
import {RegistrationEmailProvider} from "./RegistrationEmailContext";

const RegistrationPage = () => <RegistrationEmailProvider>
    <Route path="/registration/email">
        <Email/>
    </Route>
    <Route path="/registration/password/:token">
        <Password/>
    </Route>
    <Route path="/registration/message">
        <Message/>
    </Route>
    <Route exact path="/registration">
        <Redirect to="/registration/email"/>
    </Route>
</RegistrationEmailProvider>;

export default React.memo(RegistrationPage);