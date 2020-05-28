import React from 'react'
import {Navigation} from '../organisms'
import {MainContentContainer, ThemeSwitcher, DesktopThemeSwitcherContainer} from '../atoms'

const MainTemplate = ({children}) => (
    <MainContentContainer>
        {children}
        <Navigation/>
        <DesktopThemeSwitcherContainer>
            <ThemeSwitcher/>
        </DesktopThemeSwitcherContainer>
    </MainContentContainer>
)

export default MainTemplate