import React, {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import {useLazyQuery} from '@apollo/react-hooks'
import {SEARCH} from 'Common/apollo/entities/search'
import ResultsContainer from '../../ResultsContainer'
import Loader from 'Common/molecules/Loader'
import {Icon} from 'User/atoms'
import {PostCard} from 'User/organisms'
import Header from './Header'
import UsersList from './UsersList'
import EmptyUser from './EmptyUser'
import PostsList from './PostsList'
import UserCard from '../UserCard'
import IconContainer from './IconContainer'
import LoaderContainer from "./LoaderContainer"
import useDebouncedEffect from 'use-debounced-effect-hook'
import {Flex} from 'Common/atoms'
import StyledLink from 'Landing/pages/Login/components/AuthorizationForm/StyledLink'

const SearchDisplay = ({isFocused, query}) => {
    const theme = useContext(ThemeContext)
    const [search, {data, loading, called, variables}] = useLazyQuery(SEARCH, {
        variables: {
            firstPosts: 5,
            firstUsers: 4
        }
    })

    useDebouncedEffect(() => void (query && search({variables: {query}})), [query, search], 1000)


    if (!isFocused && !query)
        return <></>

    if (isFocused && !query)
        return <IconContainer><Icon icon="find" color={`rgba(${theme.secondary}, 0.2)`}/></IconContainer>

    if (!called || loading || variables.query !== query)
        return <LoaderContainer><Loader/></LoaderContainer>

    if ((!data.search.users || !data.search.users.edges.length) && (!data.search.posts || !data.search.posts.edges.length))
        return <Header>Ничего не найдено</Header>

    return <>
        {data.search.users && !!data.search.users.edges.length &&
        <ResultsContainer>
            <Flex align="center" justify="space-between">
                <h1>Найденные пользователи</h1>
                <StyledLink to={`/search/users?value=${query}`}>Показать все</StyledLink>
            </Flex>
            <UsersList>
                {data.search.users.edges.map(({node}) => <UserCard user={node} key={node.nickname}/>)}
                {data.search.users.edges.length < 4 && Array(4 - data.search.users.edges.length).fill(<EmptyUser/>)}
            </UsersList>
        </ResultsContainer>
        }
        {data.search.posts && !!data.search.posts.edges.length &&
        <ResultsContainer>
            <Flex align="center" justify="space-between">
                <h1>Найденные посты</h1>
                <StyledLink to={`/search/posts?value=${query}`}>Показать все</StyledLink>
            </Flex>
            <PostsList>
                {data.search.posts.edges.map(({node}) => <PostCard post={node} key={node.id}/>)}
            </PostsList>
        </ResultsContainer>
        }
    </>
}

export default SearchDisplay