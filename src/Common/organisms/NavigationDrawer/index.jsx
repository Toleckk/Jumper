import React, {useContext, useLayoutEffect} from 'react'
import Type from 'prop-types'
import {useQuery} from '@apollo/react-hooks'
import {ThemeContext} from 'styled-components'
import {Avatar} from 'User/atoms'
import Drawer from './Drawer'
import {ThemeSwitcher} from '../../atoms'
import {ME} from '../../apollo/entities/user'
import MobileThemeSwitcherContainer from './MobileThemeSwitcherContainer'
import Item from './Item'
import Title from './Title'
import Icon from './Icon'
import Nickname from './Nickname'
import ClosingLink from './ClosingLink'
import useLogout from '../../hooks/useLogout'
import useBooleanState from "../../hooks/useBooleanState"
import PendingSubscribesDisplay from "../PendingSubscribesDisplay"


const NavigationDrawer = ({visible, onClose, withNotifications}) => {
    const {data} = useQuery(ME)
    const [logout] = useLogout()
    const theme = useContext(ThemeContext)

    const color = `rgb(${theme.primaryText})`

    const [notificationsVisible, showNotifications, hideNotifications, , setNotificationsVisible] = useBooleanState(false)

    useLayoutEffect(() => setNotificationsVisible(withNotifications), [withNotifications])

    return (
        <Drawer visible={visible} onClose={onClose} placement="right" width="80vw">
            <ClosingLink close={onClose} to={`/@${data.me.nickname}`}>
                <Avatar src={data.me.avatar} border={true}/>
            </ClosingLink>
            <ClosingLink close={onClose} to={`/@${data.me.nickname}`}>
                <Nickname>
                    @{data.me.nickname}
                </Nickname>
            </ClosingLink>
            <ul>
                <Item>
                    <ClosingLink close={onClose} to="/feed">
                        <Icon icon="feed" size="2rem" color={color}/>
                        <Title>Новости</Title>
                    </ClosingLink>
                </Item>
                <Item>
                    <button onClick={showNotifications}>
                        <Icon icon="notifications" size="2rem" color={color}/>
                        <Title>Оповещения</Title>
                    </button>
                </Item>
                <Item>
                    <ClosingLink close={onClose} to="/settings">
                        <Icon icon="settings" size="2rem" color={color}/>
                        <Title>Настройки</Title>
                    </ClosingLink>
                </Item>
                <Item>
                    <ClosingLink close={onClose} to="/search">
                        <Icon icon="search" size="2rem" color={color}/>
                        <Title>Поиск</Title>
                    </ClosingLink>
                </Item>
                <Item>
                    <button onClick={logout}>
                        <Icon icon="logout" size="2rem" color={color}/>
                        <Title>Выйти</Title>
                    </button>
                </Item>
            </ul>
            <MobileThemeSwitcherContainer>
                <ThemeSwitcher/>
            </MobileThemeSwitcherContainer>
            <Drawer visible={notificationsVisible} onClose={hideNotifications} placement="right" width="80vw">
                <PendingSubscribesDisplay/>
            </Drawer>
        </Drawer>
    )
}

NavigationDrawer.defaultProps = {
    withNotifications: false,
}


NavigationDrawer.propTypes = {
    visible: Type.bool.isRequired,
    onClose: Type.func.isRequired,
    withNotifications: Type.bool,
}


export default React.memo(NavigationDrawer)