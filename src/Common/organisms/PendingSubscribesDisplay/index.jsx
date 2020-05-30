import React, {useCallback} from "react"
import {useQuery} from "@apollo/react-hooks"
import InfiniteScroll from "react-infinite-scroller"
import {GET_PENDING} from "../../apollo/entities/subscribe"
import {Loader} from "../../molecules"
import SubscribeCard from "../SubscribeCard"
import Title from "./Title"
import Container from "./Container"
import List from "./List"

const first = 10


const updateQuery = (previousResult, {fetchMoreResult}) => {
    const {pageInfo, edges} = fetchMoreResult.getPending
    const {__typename} = previousResult.getPending
    const previousEdges = previousResult.getPending.edges

    return edges.length
        ? {
            getPending: {
                __typename,
                edges: previousEdges.concat(edges),
                pageInfo,
            }
        }
        : previousResult
}


const PendingSubscribesDisplay = () => {
    const {data, loading, fetchMore} = useQuery(GET_PENDING, {variables: {first}})

    const loadMore = useCallback(() => data && fetchMore({
        updateQuery,
        variables: {first, after: data.getPending.pageInfo.endCursor}
    }), [fetchMore, data])

    if (loading)
        return <Loader/>

    return (
        <Container>
            <Title>Запросы на подписку</Title>
            <InfiniteScroll
                loadMore={loadMore}
                hasMore={data.getPending.pageInfo.hasNextPage}
                loader={<Loader>Загрузка...</Loader>}
                element={List}
            >
                {data.getPending.edges.map(e => <li><SubscribeCard subscribe={e.node} key={e.cursor}/></li>)}
            </InfiniteScroll>
        </Container>
    )
}

export default PendingSubscribesDisplay