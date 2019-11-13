import React, {Suspense} from 'react';
import Title from "react-document-title";
import {Route} from "react-router-dom";
import {Loader} from "components/molecules";
import Container from "./atoms/Container";
import Picture from "./Picture";
import Main from "./atoms/Main";

const AuthorizationPage = React.lazy(() => import('./Authorization'));
const RegistrationPage = React.lazy(() => import('./Registration'));
const RestorePage = React.lazy(() => import('./Restore'));

const Landing = () => <Container>
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
            <Route path="/restore">
                <Title title="Restore">
                    <RestorePage/>
                </Title>
            </Route>
        </Suspense>
    </Main>
</Container>;

export default React.memo(Landing);