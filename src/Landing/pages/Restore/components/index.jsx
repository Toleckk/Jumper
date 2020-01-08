import React, {Suspense} from 'react';
import {Loader} from "Common/molecules";
import {Redirect, Route} from "react-router-dom";

const Login = React.lazy(() => import("./Login"));
const Message = React.lazy(() => import("./Message"));
const Password = React.lazy(() => import("./Password"));

const Restore = () => <Suspense fallback={<Loader background="lite"/>}>
    <Route path="/landing/restore/login">
        <Login/>
    </Route>
    <Route path="/landing/restore/message">
        <Message/>
    </Route>
    <Route path="/landing/restore/password/:token">
        <Password/>
    </Route>
    <Route exact path="/landing/restore">
        <Redirect to="/landing/restore/login"/>
    </Route>
</Suspense>;

export default React.memo(Restore);