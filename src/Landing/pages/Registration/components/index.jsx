import React, {Suspense} from 'react';
import {Redirect, Route} from "react-router-dom";
import {Loader} from "Common/molecules";

const Email = React.lazy(() => import("./Email"));
const Password = React.lazy(() => import("./Password"));
const Message = React.lazy(() => import("./Message"));

const Registration = () => (
    <Suspense fallback={<Loader background="lite"/>}>
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
    </Suspense>
);

export default React.memo(Registration);