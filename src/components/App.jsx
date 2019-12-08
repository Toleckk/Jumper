import React, {useEffect} from 'react';
import {useQuery} from "@apollo/react-hooks";
import {Route, Switch, useHistory} from "react-router-dom";
import {client} from "apollo";
import {ME} from "apollo/requests/user";
import {ME as STORED_ME} from "apollo/actions/user";
import {BigLoader} from "./Common/molecules";
import Landing from "./Landing";
import UserPage from "./UserPage";

const App = () => {
    const {loading, data} = useQuery(STORED_ME);
    const history = useHistory();

    useEffect(() => {
        client.query({query: ME});
    }, []);

    useEffect(() => {
        if (data && data.me)
            history.replace(`/user/${data.me.nickname}`);
    }, [data]);

    if (loading)
        return <BigLoader/>;

    return <Switch>
        <Route exact path="/user/:nickname">
            <UserPage/>
        </Route>
        <Route path="/">
            <Landing/>
        </Route>
    </Switch>;
};

export default React.memo(App);