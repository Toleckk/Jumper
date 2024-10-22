import React, {useCallback} from "react"
import {useQuery} from "@apollo/react-hooks"
import {Loader as BigLoader, Pagination} from "Common/molecules"
import {COMMENTS} from "Common/apollo/entities/comment"
import {Tip} from '../../atoms'
import CommentCard from "../CommentCard"
import List from "./List"
import Loader from "Feed/atoms/Loader"

const first = 15

const updateQuery = (previousResult, {fetchMoreResult}) => {
    const {pageInfo, edges} = fetchMoreResult.comments
    const {__typename} = previousResult.comments
    const previousEdges = previousResult.comments.edges

    return edges.length
        ? {
            comments: {
                __typename,
                pageInfo,
                edges: previousEdges.concat(edges)
            }
        }
        : previousResult
}

const CommentsList = ({post}) => {
    const {data, loading, fetchMore} = useQuery(COMMENTS, {variables: {post: post.id, first}, fetchPolicy: "network-only"})

    const loadMore = useCallback(() => fetchMore({
        updateQuery,
        variables: {first, after: data.comments.pageInfo.endCursor}
    }), [fetchMore, data])

    if (loading)
        return <BigLoader/>

    if (!data.comments.edges || !data.comments.edges.length)
        return <Tip>Будьте первым, кто оставит комментарий</Tip>

    return (
        <Pagination
            hasMore={data.comments.pageInfo.hasNextPage}
            loadMore={loadMore}
            Loader={() => <Loader key={0}>Загрузка...</Loader>}
            Component={List}
            reverse
        >
            {data.comments.edges.map(({node}) => <CommentCard key={node.id} comment={node}/>)}
        </Pagination>
    )
}

export default CommentsList