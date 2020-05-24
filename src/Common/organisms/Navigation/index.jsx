import React, {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import Container from "./Container"
import Avatar from "User/atoms/Avatar"
import {useMutation, useQuery} from "@apollo/react-hooks"
import {ME} from "../../apollo/entities/user"
import List from "./List"
import Icon from "User/atoms/Icon"
import {Link, Redirect} from "react-router-dom"
import {LOGOUT} from "../../apollo/entities/session"

const width = {width: '100%'}

const fullSize = {width: '100%', height: '100%'}

const Navigation = () => {
    const {data: {me}} = useQuery(ME)

    const [logout] = useMutation(LOGOUT, {refetchQueries: [{query: ME}]})

    const theme = useContext(ThemeContext)

    if (!me)
        return <Redirect to="/"/>

    const color = `rgb(${theme.primaryText})`
    const height = '100%'

    return (
        <Container>
            <List>
                <li title={me.nickname}>
                    <Link to={`/@${me.nickname}`}>
                        <Avatar src={me.avatar} border size="navigation"/>
                    </Link>
                </li>
                <li title="Новости">
                    <Link to="/feed">
                        <Icon icon="feed" height={height} size={null} color={color}/>
                    </Link>
                </li>
                <li title="Настройки">
                    <Link to="/settings">
                        <Icon icon="settings" height={height} size={null} color={color}/>
                    </Link>
                </li>
                <li title="Поиск">
                    <Link to="/search">
                        <Icon icon="search" height={height} size={null} color={color}/>
                    </Link>
                </li>
                <li title="Выйти" style={width}>
                    <button onClick={logout} style={fullSize}>
                        <Icon icon="logout" height={height} size={null} color={color}/>
                    </button>
                </li>
            </List>
        </Container>
    )
}

export default React.memo(Navigation)