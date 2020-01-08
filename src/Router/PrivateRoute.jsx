import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import {Route, useHistory} from "react-router-dom";
import {ME} from "Common/apollo/queries/user";

const PrivateRoute = ({children, ...props}) => {
    const {data} = useQuery(ME);
    const history = useHistory();

    if(!data.user)
        history.push('/landing/login');

    return <Route {...props}>{children}</Route>;
};

export default React.memo(PrivateRoute);