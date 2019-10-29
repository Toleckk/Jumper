import React from 'react';
import Container from "./Container";
import Picture from "./Picture";
import {Route} from "react-router-dom";
import Info from "./Info";
import Main from "./Main";

const Landing = () => <Container>
    <Picture/>
    <Main>
        <Route exact path="/">
            <Info/>
        </Route>
        <Route exact path="/registration">
            <div>aaa</div>
        </Route>
    </Main>
</Container>;

export default Landing;