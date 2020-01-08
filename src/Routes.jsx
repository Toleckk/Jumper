import React from 'react';
import Title from "react-document-title";
import {Route, Switch} from "react-router-dom";
import {Routes as LandingRoutes} from "Landing";
import NotFound from "Common/pages/NotFound";
import {PublicRoute, Slash}from "Router";

const Routes = () => <Switch>
    <PublicRoute path="/landing">
        <LandingRoutes/>
    </PublicRoute>
    <Route exact path="/">
        <Slash/>
    </Route>
    <Route path="/">
        <Title title="Not Found">
            <NotFound/>
        </Title>
    </Route>
</Switch>;

export default React.memo(Routes);