import React, {Suspense} from 'react'
import {Switch, Redirect} from 'react-router-dom'
import Title from 'react-document-title'
import {PublicRoute} from '../Router'
import {FullWidthContainer, Main} from './atoms'
import {Picture} from './molecules'
import {Loader} from '../Common/molecules'

const Login = React.lazy(() => import('./pages/Login'))
const Registration = React.lazy(() => import('./pages/Registration'))
const Restore = React.lazy(() => import('./pages/Restore'))

const Landing = () => (
    <FullWidthContainer>
        <Picture/>
        <Main>
            <Suspense fallback={<Loader background="lite"/>}>
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
                    <PublicRoute path="/landing/restore">
                        <Title title="Restore">
                            <Restore/>
                        </Title>
                    </PublicRoute>
                    <PublicRoute>
                        <Redirect to="/landing/login"/>
                    </PublicRoute>
                </Switch>
            </Suspense>
        </Main>
    </FullWidthContainer>
)

export default React.memo(Landing)