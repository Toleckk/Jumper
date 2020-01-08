import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import {ME} from "../Common/apollo/queries/user";
import {Redirect} from "react-router-dom";
import {Loader} from "../Common/molecules";

const Slash = () => {
    const {data, loading} = useQuery(ME);

    if(loading)
        return <Loader/>;

    if(data.me)
        return <Redirect to="/feed"/>;

    return <Redirect to="/landing/login"/>;
};

export default React.memo(Slash);