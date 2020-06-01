import React, {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import {Link, Redirect, useLocation} from 'react-router-dom'
import {useQuery} from '@apollo/react-hooks'
import {ME} from 'Common/apollo/entities/user'
import {Avatar, Icon} from 'User/atoms'
import NavigationDrawer from '../NavigationDrawer'
import Container from './Container'
import List from './List'
import DrawerButton from './DrawerButton'
import UserLink from './UserLink'
import Item from './Item'
import Notifications from '../Notifications'
import useBooleanState from 'Common/hooks/useBooleanState'
import useOnClickOutside from 'Common/hooks/useOnClickOutside'
import useLogout from '../../hooks/useLogout'

const width = {width: '100%'}
const height = '100%'
const fullSize = {width: '100%', height: '100%'}


const Navigation = () => {
    const {data: {me}} = useQuery(ME)
    const [logout] = useLogout()
    const {pathname} = useLocation()

    const [drawerVisible, openDrawer, closeDrawer] = useBooleanState(false)
    const [notificationsOpened,, closeNotifications, invertNotifications] = useBooleanState(false)

    const notificationButton = React.useRef(null)

    const close = React.useCallback(event => {
        if (event.path.every(e => e !== notificationButton.current))
            closeNotifications()
    }, [closeNotifications])

    const container = useOnClickOutside(closeNotifications)

    const theme = useContext(ThemeContext)
    const color = `rgb(${theme.primaryText})`

    if (!me)
        return <Redirect to="/"/>

    return (
        <Container ref={container} active={notificationsOpened}>
            <List>
                <Item title={me.nickname} active={pathname.startsWith(`/@${me.nickname}`)}>
                    <DrawerButton onClick={openDrawer}>
                        <Avatar src={me.avatar} border size="navigation"/>
                    </DrawerButton>
                    <UserLink to={`/@${me.nickname}`}>
                        <Avatar src={me.avatar} border size="navigation"/>
                    </UserLink>
                </Item>
                <Item title="Новости" active={pathname.startsWith('/feed')}>
                    <Link to="/feed">
                        <Icon icon="feed" height={height} size={null} color={color}/>
                    </Link>
                </Item>
                <Item title="Оповещения" active={notificationsOpened}>
                    <button style={fullSize} onClick={invertNotifications} ref={notificationButton}>
                        <Icon icon="notifications" height={height} size={null} color={color}/>
                    </button>
                </Item>
                <Item title="Настройки" active={pathname.startsWith('/settings')} hide>
                    <Link to="/settings">
                        <Icon icon="settings" height={height} size={null} color={color}/>
                    </Link>
                </Item>
                <Item title="Поиск" active={pathname.startsWith('/search')}>
                    <Link to="/search">
                        <Icon icon="search" height={height} size={null} color={color}/>
                    </Link>
                </Item>
                <Item title="Выйти" style={width}>
                    <button onClick={logout} style={fullSize}>
                        <Icon icon="logout" height={height} size={null} color={color}/>
                    </button>
                </Item>
            </List>
            <NavigationDrawer onClose={closeDrawer} visible={drawerVisible}/>
            {notificationsOpened && <Notifications close={close}/>}
        </Container>
    )
}

export default React.memo(Navigation)