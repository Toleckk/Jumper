import React, {useEffect, useMemo, useState} from "react"
import {ThemeProvider} from "styled-components"
import * as themes from './themes'

const defaultTheme = localStorage.getItem('theme') || 'dark'


const Theme = ({children}) => {
    const [theme, setTheme] = useState(themes[defaultTheme])

    useEffect(() => localStorage.setItem('theme', theme.name), [theme.name])

    const value = useMemo(() => ({...theme, setTheme}), [theme, setTheme])

    return (
        <ThemeProvider theme={value}>
            {children}
        </ThemeProvider>
    )
}

export default Theme