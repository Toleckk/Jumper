import React, {useCallback} from "react"
import {useQuery} from "@apollo/react-hooks"
import {Loader as BigLoader} from 'Common/molecules'
import {FEED} from "Common/apollo/entities/feed"
import List from "./atoms/List"
import PostCard from "../User/organisms/PostCard"
import Loader from "./atoms/Loader"
import PostForm from "../User/organisms/PostForm"
import {ME} from "../Common/apollo/entities/user"
import {Redirect} from "react-router-dom"
import Suggestions from "./organisms/Suggestions"
import Pagination from "../Common/molecules/Pagination"

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
        <>
            <PostForm/>
            {!me.me.subscribesCount && <Suggestions/>}
            <Pagination
                hasMore={data.feed.pageInfo.hasNextPage}
                loadMore={loadMore}
                loader={() => <Loader>Загрузка...</Loader>}
                Component={List}
            >
                {data.feed.edges.map(({node}) => <li key={node.id}><PostCard post={node} withDelete={false}/></li>)}
            </Pagination>
        </>
    )
}

export default Feed