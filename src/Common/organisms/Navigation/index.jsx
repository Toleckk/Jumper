import React from 'react'
import Container from "./Container"
import Avatar from "User/atoms/Avatar"
import {useMutation, useQuery} from "@apollo/react-hooks"
import {ME} from "../../apollo/entities/user"
import List from "./List"
import Icon from "User/atoms/Icon"
import {Link, Redirect} from "react-router-dom"
import {LOGOUT} from "../../apollo/entities/session"

const Navigation = () => {
    const {data: {me}} = useQuery(ME)

    const [logout] = useMutation(LOGOUT);

    if (!me)
        return <Redirect to="/"/>

    return (
        <Container>
            <List>
                <li>
                    <Link to={`/@${me.nickname}`}>
                        <Avatar src={me.avatar} border size="navigation"/>
                    </Link>
                </li>
                <li>
                    <Link to="/feed">
                        <Icon icon="feed" size="50px"/>
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        <Icon icon="settings" size="50px"/>
                    </Link>
                </li>
                <li>
                    <Link to="/search">
                        <Icon icon="search" size="50px"/>
                    </Link>
                </li>
                <li>
                    <Link to="/logout">
                        <Icon icon="logout" size="50px"/>
                    </Link>
                </li>
            </List>
        </Container>
    )
}

export default React.memo(Navigation)