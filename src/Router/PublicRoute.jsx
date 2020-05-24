import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {Route, Redirect} from 'react-router-dom'
import {ME} from 'Common/apollo/entities/user'

const PublicRoute = ({children, ...props}) => {
    const {data} = useQuery(ME)

    if (data && data.me && data.me.nickname)
        return <Redirect to="/feed"/>

    return <Route {...props}>{children}</Route>
}

export default React.memo(PublicRoute)