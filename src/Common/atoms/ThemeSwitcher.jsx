import React, {useCallback, useContext} from 'react'
import {ThemeContext} from "styled-components"
import {Icon} from "User/atoms"
import {dark, light} from "Common/theme"

const ThemeSwitcher = () => {
    const {name, setTheme} = useContext(ThemeContext)

    const icon = name === 'dark' ? 'light-theme' : 'dark-theme'
    const color = name === 'dark' ? light.primaryDark : dark.primaryDark

    const onClick = useCallback(() => setTheme(name === 'dark' ? light : dark), [setTheme, name])

    return (
        <button onClick={onClick} title={name === 'dark' ? 'Светлая тема' : 'Тёмная тема'}>
            <Icon icon={icon} color={`rgb(${color})`} size="35px"/>
        </button>
    )
}

export default React.memo(ThemeSwitcher)