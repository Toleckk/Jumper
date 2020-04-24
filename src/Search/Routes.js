import React from "react"
import {Route, Switch} from "react-router-dom"

const Search = React.lazy(() => import('./pages/Search'))
const SearchUsers = React.lazy(() => import('./pages/SearchUsers'))
const SearchPosts = React.lazy(() => import('./pages/SearchPosts'))

const Routes = () => {
    return (
        <Switch>
            <Route path="/search/users">
                <SearchUsers/>
            </Route>
            <Route path="/search/posts">
                <SearchPosts/>
            </Route>
            <Route exact path="/search">
                <Search/>
            </Route>
        </Switch>
    )
}

export default React.memo(Routes)