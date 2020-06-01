import React, {useContext} from 'react'
import Type from 'prop-types'
import {useQuery} from '@apollo/react-hooks'
import {ThemeContext} from 'styled-components'
import Drawer from './Drawer'
import {ThemeSwitcher} from '../../atoms'
import {ME} from '../../apollo/entities/user'
import {Avatar} from 'User/atoms'
import MobileThemeSwitcherContainer from './MobileThemeSwitcherContainer'
import Item from './Item'
import Title from './Title'
import Icon from './Icon'
import Nickname from './Nickname'
import ClosingLink from './ClosingLink'
import useLogout from '../../hooks/useLogout'


const NavigationDrawer = ({visible, onClose}) => {
    const {data} = useQuery(ME)
    const [logout] = useLogout()
    const theme = useContext(ThemeContext)

    const color = `rgb(${theme.primaryText})`

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
        </Drawer>
    )
}


NavigationDrawer.propTypes = {
    visible: Type.bool.isRequired,
    onClose: Type.func.isRequired,
}


export default React.memo(NavigationDrawer)