import React, {useCallback, useContext} from "react"
import {ThemeContext} from "styled-components"
import {useLazyQuery} from "@apollo/react-hooks"
import useDebouncedEffect from "use-debounced-effect-hook"
import {SEARCH_POSTS} from "Common/apollo/entities/search"
import {Loader as BigLoader, Pagination} from "Common/molecules"
import Loader from "Feed/atoms/Loader"
import {Icon} from "User/atoms"
import {PostCard} from "User/organisms"
import IconContainer from "../SearchDisplay/IconContainer"
import LoaderContainer from "../SearchDisplay/LoaderContainer"
import Header from "../SearchDisplay/Header"
import ResultsContainer from "../../atoms/ResultsContainer"
import PostsList from "../SearchDisplay/PostsList"

const first = 16

const updateQuery = (previousResult, {fetchMoreResult}) => {
    const {pageInfo, edges} = fetchMoreResult.search.posts
    const previousEdges = previousResult.search.posts.edges

    return edges.length
        ? {
            search: {
                __typename: previousResult.search.__typename,
                posts: {
                    __typename: previousResult.search.posts.__typename,
                    edges: previousEdges.concat(edges),
                    pageInfo,
                },
            }
        }
        : previousResult
}

const SearchPostsDisplay = ({isFocused, query}) => {
    const theme = useContext(ThemeContext)

    const [search, {data, loading, called, variables, fetchMore}] = useLazyQuery(SEARCH_POSTS, {variables: {first}})

    useDebouncedEffect(() => void (query && search({variables: {query}})), [query, search], 1000)

    const loadMore = useCallback(() => fetchMore({
        updateQuery,
        variables: {first, after: data.search.posts.pageInfo.endCursor}
    }), [fetchMore, data])

    if (!isFocused && !query)
        return <></>

    if (isFocused && !query)
        return <IconContainer><Icon icon="find" color={`rgba(${theme.secondary}, 0.2)`}/></IconContainer>

    if (!called || loading || variables.query !== query)
        return <LoaderContainer><BigLoader/></LoaderContainer>

    if (!data.search.posts || !data.search.posts.edges.length)
        return <Header>Ничего не найдено</Header>

    return (
        <ResultsContainer>
            <h1>Найденные посты</h1>
            <Pagination
                loadMore={loadMore}
                hasMore={data.search.posts.pageInfo.hasNextPage}
                Loader={() => <Loader>Загрузка...</Loader>}
                Component={PostsList}
                getScrollable={() => window.document}
            >
                {data.search.posts.edges.map(({node}) => <li key={node.id}><PostCard post={node} withDelete={false}/></li>)}
            </Pagination>
        </ResultsContainer>
    )
}

export default SearchPostsDisplay