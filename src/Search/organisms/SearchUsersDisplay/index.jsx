import React, {useCallback, useContext} from "react"
import {ThemeContext} from "styled-components"
import {useLazyQuery} from "@apollo/react-hooks"
import InfiniteScroll from 'react-infinite-scroller'
import {SEARCH_USERS} from "../../../Common/apollo/entities/search"
import useDebouncedEffect from "use-debounced-effect-hook"
import IconContainer from "../SearchDisplay/IconContainer"
import {Icon} from "../../../User/atoms"
import LoaderContainer from "../SearchDisplay/LoaderContainer"
import {Loader as BigLoader} from "Common/molecules"
import Header from "../SearchDisplay/Header"
import UsersList from "../SearchDisplay/UsersList"
import UserCard from "../UserCard"
import EmptyUser from "../SearchDisplay/EmptyUser"
import ResultsContainer from "../../atoms/ResultsContainer"
import Loader from "Feed/atoms/Loader"

const first = 16

const updateQuery = (previousResult, {fetchMoreResult}) => {
    const {pageInfo, edges} = fetchMoreResult.search.users
    const {__typename} = previousResult.search.users
    const previousEdges = previousResult.search.users.edges

    return edges.length
        ? {
            search: {
                __typename: previousResult.__typename,
                users: {
                    __typename,
                    edges: previousEdges.concat(edges),
                    pageInfo,
                },
            }
        }
        : previousResult
}


const SearchUsersDisplay = ({isFocused, query}) => {
    const theme = useContext(ThemeContext)

    const [search, {data, loading, called, variables, fetchMore}] = useLazyQuery(SEARCH_USERS, {variables: {first}})

    useDebouncedEffect(() => void (query && search({variables: {query}})), [query, search], 1000)

    const loadMore = useCallback(() => fetchMore({
        updateQuery,
        variables: {first, after: data.search.users.pageInfo.endCursor}
    }), [fetchMore, data])

    if (!isFocused && !query)
        return <></>

    if (isFocused && !query)
        return <IconContainer><Icon icon="find" color={`rgba(${theme.secondary}, 0.2)`}/></IconContainer>

    if (!called || loading || variables.query !== query)
        return <LoaderContainer><BigLoader/></LoaderContainer>

    if (!data.search.users || !data.search.users.edges.length)
        return <Header>Ничего не найдено</Header>

    return (
        <ResultsContainer>
            <h1>Найденные пользователи</h1>
            <InfiniteScroll
                loadMore={loadMore}
                hasMore={data.search.users.pageInfo.hasNextPage}
                loader={<Loader>Загрузка...</Loader>}
            >
                <UsersList>
                    {data.search.users.edges.map(({node}) => <UserCard user={node} key={node.nickname}/>)}
                    {data.search.users.edges.length < 4 && Array(4 - data.search.users.edges.length % 4).fill(
                        <EmptyUser/>)}
                </UsersList>
            </InfiniteScroll>
        </ResultsContainer>
    )
}

export default SearchUsersDisplay