import React from 'react'
import {Navigation} from '../organisms'
import {MainContentContainer} from '../atoms'

const MainTemplate = ({children}) => (
    <MainContentContainer>
        {children}
        <Navigation/>
    </MainContentContainer>
)

export default MainTemplate