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
import {ME} from "../Common/apollo/entities/user"
import {Redirect} from "react-router-dom"

const first = 25

const updateQuery = (previousResult, {fetchMoreResult}) => {
    const {pageInfo, edges} = fetchMoreResult.feed
    const {__typename} = previousResult.feed
    const previousEdges = previousResult.feed.edges

    return edges.length ? {feed: {__typename, edges: previousEdges.concat(edges), pageInfo}} : previousResult
}

const Feed = () => {
    const {data, fetchMore, loading} = useQuery(FEED, {variables: {first}})
    const {data: me, loading: meLoading} = useQuery(ME)

    const loadMore = useCallback(() => fetchMore({
        updateQuery,
        variables: {first, after: data.feed.pageInfo.endCursor}
    }), [fetchMore, data])

    if (loading || meLoading)
        return <BigLoader/>

    if (!me || !me.me)
        return <Redirect to="/"/>

    return (
        <Container>
            <PostForm/>
            <List>
                <InfiniteScroll
                    hasMore={data.feed.pageInfo.hasNextPage}
                    loadMore={loadMore}
                    loader={<Loader>Загрузка...</Loader>}
                >
                    {data.feed.edges.map(({node}) => <PostCard post={node} key={node.id} withDelete={false}/>)}
                </InfiniteScroll>
            </List>
            <Navigation/>
        </Container>
    )
}

export default Feed