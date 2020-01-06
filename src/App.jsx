import React from 'react';
import Title from "react-document-title";
import {Route} from "react-router-dom";
import Authorization from "./Authorization";
import Registration from "./Registration";
import Restore from "./Restore";

const App = () => <>
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
</>;

export default React.memo(App);