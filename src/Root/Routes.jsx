import React from 'react';
import Title from "react-document-title";
import {Route, Switch} from "react-router-dom";
import Authorization from "../Authorization";
import Registration from "../Registration";
import Restore from "../Restore";
import NotFound from "./NotFound";

const Routes = () => <Switch>
    <Route exact path="/">
        <Title title="Login">
            <Authorization/>
        </Title>
    </Route>
    <Route path="/registration">
        <Title title="Registration">
            <Registration/>
        </Title>
    </Route>
    <Route path="/restore">
        <Title title="Restore">
            <Restore/>
        </Title>
    </Route>
    <Route path="/">
        <Title title="Not Found">
            <NotFound/>
        </Title>
    </Route>
</Switch>;

export default React.memo(Routes);