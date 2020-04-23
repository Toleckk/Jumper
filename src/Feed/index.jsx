import React, {useCallback} from "react"
import {useQuery} from "@apollo/react-hooks"
import InfiniteScroll from 'react-infinite-scroller'
import {Loader as BigLoader} from 'Common/molecules'
import {Navigation} from "Common/organisms"
import {FEED} from "Common/apollo/entities/feed"
import List from "./List"
import PostCard from "../User/organisms/PostCard"
import Loader from "./Loader"
import PostForm from "../User/organisms/PostForm"
import Container from "./Container"

const first = 25

const updateQuery = (previousResult, {fetchMoreResult}) => {
    const {pageInfo, edges} = fetchMoreResult.feed
    const {__typename} = previousResult.feed
    const previousEdges = previousResult.feed.edges

    return edges.length ? {feed: {__typename, edges: previousEdges.concat(edges), pageInfo}} : previousResult
}

const Feed = () => {
    const {data, fetchMore, loading} = useQuery(FEED, {variables: {first}})

    const loadMore = useCallback(() => fetchMore({
        updateQuery,
        variables: {first, after: data.feed.pageInfo.endCursor}
    }), [fetchMore, data])

    if (loading)
        return <BigLoader/>

    return (
        <Container>
            <PostForm/>
            <List>
                <InfiniteScroll
                    hasMore={data.feed.pageInfo.hasNextPage}
                    loadMore={loadMore}
                    loader={<Loader>Загрузка...</Loader>}
                >
                    {data.feed.edges.map(({node}) => <PostCard post={node} key={node.id}/>)}
                </InfiniteScroll>
            </List>
            <Navigation/>
        </Container>
    )
}

export default Feed