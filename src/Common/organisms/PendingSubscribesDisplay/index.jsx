import React from "react"
import {useQuery} from "@apollo/react-hooks"
import {GET_PENDING} from "../../apollo/entities/subscribe"
import {Loader} from "../../molecules"
import SubscribeCard from "../SubscribeCard"
import Title from "./Title"
import Container from "./Container"

const PendingSubscribesDisplay = () => {
    const {data, loading} = useQuery(GET_PENDING)

    if (loading)
        return <Loader/>

    return (
        <Container>
            <Title>Запросы на подписку</Title>
            <ul>
                {data.getPending.edges.map(e => <SubscribeCard subscribe={e.node} key={e.cursor}/>)}
            </ul>
        </Container>
    )
}

export default PendingSubscribesDisplay