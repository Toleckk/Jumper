import React, {Suspense} from 'react';
import Title from "react-document-title";
import {Route, Switch} from "react-router-dom";
import {NotFound} from "Common/pages";
import {Loader} from "Common/molecules";
import {PublicRoute, Slash} from "Router";
import Settings from "./Settings"
import Feed from "./Feed"

const LandingRoutes = React.lazy(() => import('./Landing/Routes'));
const User = React.lazy(() => import('./User'));

const Routes = () => (
    <Suspense fallback={<Loader/>}>
        <Switch>
            <PublicRoute path="/landing">
                <LandingRoutes/>
            </PublicRoute>
            <Route path="/@:nickname">
                <User/>
            </Route>
            <Route path="/settings">
                <Settings/>
            </Route>
            <Route path="/feed">
                <Feed/>
            </Route>
            <Route exact path="/">
                <Slash/>
            </Route>
            <Route path="/">
                <Title title="Not Found">
                    <NotFound/>
                </Title>
            </Route>
        </Switch>
    </Suspense>
);

export default React.memo(Routes);