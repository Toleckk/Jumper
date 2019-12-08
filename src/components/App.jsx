import React, {useEffect} from 'react';
import {useQuery} from "@apollo/react-hooks";
import {client} from "apollo";
import {ME} from "apollo/requests/user";
import {ME as STORED_ME} from "apollo/actions/user";
import BigLoader from "./BigLoader";
import Landing from "./Landing";

const App = () => {
    const {loading, data} = useQuery(STORED_ME);

    useEffect(() => {
        client.query({query: ME});
    }, []);

    if (loading)
        return <BigLoader/>;
    if (!data || !data.me)
        return <Landing/>;
    return <></>;
};

export default React.memo(App);