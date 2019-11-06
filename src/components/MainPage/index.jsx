import React, {Suspense} from 'react';
import Title from "react-document-title";
import Container from "./Container";
import Picture from "./Picture";
import {Route} from "react-router-dom";
import Main from "./Main";
import Loader from "../atoms/Loader";

const AuthorizationPage = React.lazy(() => import('./AuthorizationPage'));
const RegistrationPage = React.lazy(() => import('./RegistrationPage'));

const MainPage = () => <Container>
    <Picture/>
    <Main>
        <Suspense fallback={<Loader/>}>
            <Route exact path="/">
                <AuthorizationPage/>
            </Route>
            <Route path="/registration">
                <Title title="Registration">
                    <RegistrationPage/>
                </Title>
            </Route>
        </Suspense>
    </Main>
</Container>;

export default MainPage;