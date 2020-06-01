import React, {useCallback} from "react"
import {useQuery} from "@apollo/react-hooks"
import {Loader as BigLoader, Pagination} from 'Common/molecules'
import {GET_PENDING} from "../../apollo/entities/subscribe"
import SubscribeCard from "../SubscribeCard"
import Title from "./Title"
import Container from "./Container"
import Loader from "Comments/atoms/Loader"
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
        return <BigLoader/>

    return (
        <Container>
            <Title>Запросы на подписку</Title>
            <Pagination
                loadMore={loadMore}
                hasMore={data.getPending.pageInfo.hasNextPage}
                treshold={100}
                Loader={() => <Loader>Загрузка...</Loader>}
                Component={List}
            >
                {data.getPending.edges.map(e => <li key={e.cursor}><SubscribeCard subscribe={e.node}/></li>)}
            </Pagination>
        </Container>
    )
}

export default PendingSubscribesDisplay