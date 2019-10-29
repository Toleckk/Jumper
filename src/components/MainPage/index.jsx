import React, {Suspense} from 'react';
import Container from "./Container";
import Picture from "./Picture";
import {Route} from "react-router-dom";
import Main from "./Main";
const AuthorizationPage = React.lazy(() => import('./AuthorizationPage'));
const RegistrationPage = React.lazy(() => import('./RegistrationPage'));

const MainPage = () => <Container>
    <Picture/>
    <Main>
        <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/">
                <AuthorizationPage/>
            </Route>
            <Route exact path="/registration">
                <RegistrationPage/>
            </Route>
        </Suspense>
    </Main>
</Container>;

export default MainPage;