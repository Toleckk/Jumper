import React from 'react';
import {Switch} from "react-router-dom";
import Title from "react-document-title";
import {PublicRoute} from "../Router";
import {FullWidthContainer, Main} from "./atoms";
import {Picture} from "./molecules";
import {Login, Registration, Restore} from "./pages";

const Landing = () => (
    <FullWidthContainer>
        <Picture/>
        <Main>
            <Switch>
                <PublicRoute path="/landing/login">
                    <Title title="Login">
                        <Login/>
                    </Title>
                </PublicRoute>
                <PublicRoute path="/landing/registration">
                    <Title title="Registration">
                        <Registration/>
                    </Title>
                </PublicRoute>
                <PublicRoute>
                    <Title title="Restore">
                        <Restore/>
                    </Title>
                </PublicRoute>
            </Switch>
        </Main>
    </FullWidthContainer>
);

export default React.memo(Landing);