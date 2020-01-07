import React from 'react';
import Title from "react-document-title";
import {Route, Switch} from "react-router-dom";
import {Routes as LandingRoutes} from "./Landing";
import NotFound from "Common/pages/NotFound";
import PublicRoute from "Router/PublicRoute";

const Routes = () => <Switch>
    <PublicRoute path="/landing">
        <LandingRoutes/>
    </PublicRoute>
    <Route path="/">
        <Title title="Not Found">
            <NotFound/>
        </Title>
    </Route>
</Switch>;

export default React.memo(Routes);