import React, {Suspense} from 'react';
import Title from "react-document-title";
import {Route, Switch} from "react-router-dom";
import {NotFound} from "Common/pages";
import {Loader} from "Common/molecules";
import {PublicRoute, Slash} from "Router";

const LandingRoutes = React.lazy(() => import('./Landing/Routes'));

const Routes = () => (
    <Suspense fallback={<Loader/>}>
        <Switch>
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
        </Switch>
    </Suspense>
);

export default React.memo(Routes);