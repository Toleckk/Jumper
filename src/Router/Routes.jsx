import React from 'react';
import Title from "react-document-title";
import {Route, Switch} from "react-router-dom";
import Authorization from "../Landing/pages/Login";
import Registration from "../Landing/pages/Registration";
import Restore from "../Landing/pages/Restore";
import NotFound from "../Common/pages/NotFound";
import PublicRoute from "./PublicRoute";

const Routes = () => <Switch>
    <PublicRoute path="/login">
        <Title title="Login">
            <Authorization/>
        </Title>
    </PublicRoute>
    <PublicRoute path="/registration">
        <Title title="Registration">
            <Registration/>
        </Title>
    </PublicRoute>
    <PublicRoute path="/restore">
        <Title title="Restore">
            <Restore/>
        </Title>
    </PublicRoute>
    <Route path="/">
        <Title title="Not Found">
            <NotFound/>
        </Title>
    </Route>
</Switch>;

export default React.memo(Routes);