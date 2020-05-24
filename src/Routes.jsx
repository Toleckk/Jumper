import React, {Suspense} from 'react'
import Title from 'react-document-title'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import {NotFound} from 'Common/pages'
import {Loader} from 'Common/molecules'
import {MainTemplate} from 'Common/templates'
import {PublicRoute, Slash} from 'Router'

const Feed = React.lazy(() => import('./Feed'))
const LandingRoutes = React.lazy(() => import('./Landing/Routes'))
const SearchRoutes = React.lazy(() => import('./Search/Routes'))
const User = React.lazy(() => import('./User'))
const Settings = React.lazy(() => import('./Settings'))

const Routes = () => (
    <Suspense fallback={<Loader/>}>
        <Switch>
            <PublicRoute path="/landing">
                <LandingRoutes/>
            </PublicRoute>
            <MainTemplate>
                <Suspense fallback={<Loader/>}>
                <Switch>
                    <Route path="/@:nickname">
                        <User/>
                    </Route>
                    <Route path="/settings">
                        <Settings/>
                    </Route>
                    <Route path="/feed">
                        <Feed/>
                    </Route>
                    <Route path="/search">
                        <SearchRoutes/>
                    </Route>
                    <Route exact path="/">
                        <Slash/>
                    </Route>
                    <Route path="/">
                        <Title title="Not Found">
                            <NotFound/>
                        </Title>
                    </Route>
                </Switch>
                </Suspense>
            </MainTemplate>
        </Switch>
    </Suspense>
)

export default React.memo(Routes)