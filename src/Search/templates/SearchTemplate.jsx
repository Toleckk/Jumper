import React, {useCallback, useContext} from "react"
import {useHistory, useLocation} from 'react-router-dom'
import {Navigation} from 'Common/organisms'
import Container from '../atoms/Container'
import SearchInput from '../atoms/SearchInput'
import InputContainer from '../atoms/InputContainer'
import {Icon} from '../../User/atoms'
import FocusWithin from 'react-focus-within'
import IconContainer from '../atoms/IconContainer'
import {ThemeContext} from 'styled-components'
import AllResultsContainer from '../atoms/AllResultsContainer'

const SearchTemplate = ({Component}) => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const history = useHistory()
    const theme = useContext(ThemeContext)

    const onChange = useCallback(({target}) => {
        history.replace({
            pathname: location.pathname,
            search: '?value=' + target.value
        })
    }, [history, location])

    return (
        <Container>
            <FocusWithin>{({focusProps, isFocused}) => (
                <>
                    <InputContainer {...focusProps}>
                        <SearchInput id="search" onChange={onChange} value={params.get('value')}/>
                        <IconContainer for="search" focused={isFocused}>
                            <Icon icon="find" color={`rgb(${theme.primary})`}/>
                        </IconContainer>
                    </InputContainer>
                    <AllResultsContainer focused={isFocused || params.get('value')}>
                        <Component query={params.get('value')} isFocused={isFocused}/>
                    </AllResultsContainer>
                </>
            )}</FocusWithin>
            <Navigation/>
        </Container>
    )
}

export default React.memo(SearchTemplate)