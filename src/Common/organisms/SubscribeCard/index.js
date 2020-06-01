import React from "react"
import Type from 'prop-types'
import {ACCEPT, REJECT} from "Common/apollo/entities/subscribe"
import {Link, Flex} from "Common/atoms"
import {Avatar, Icon, Nickname} from "User/atoms"
import Container from "./Container"
import Button from "./Button"
import {useMutation} from "@apollo/react-hooks"
import Pin from "./Pin"

const SubscribeCard = ({subscribe}) => {
    const {subscriber: {nickname, avatar}} = subscribe

    const [accept, {loading: accepting, data: accepted}] = useMutation(ACCEPT, {variables: {nickname}})
    const [reject, {loading: rejecting, data: rejected}] = useMutation(REJECT, {variables: {nickname}})

    if(accepted)
        return <Pin><span>Запрос принят</span> <Icon icon="confirm" size="1rem"/></Pin>

    if(rejected)
        return <Pin><span>Запрос отклонён</span> <Icon icon="reset" size="1rem"/></Pin>

    return (
        <Container>
            <Flex as={Link} to={`/@${nickname}`}>
                <Avatar size="small" src={avatar}/>
            </Flex>
            <Nickname size="small">
                <Link to={`/@${nickname}`}>
                    &nbsp;{nickname}
                </Link>
            </Nickname>
            <Button onClick={reject} disabled={accepting || rejecting}>
                <Icon icon="reset"/>
            </Button>
            <Button onClick={accept} disabled={accepting || rejecting}>
                <Icon icon="confirm"/>
            </Button>
        </Container>
    )
}

SubscribeCard.propTypes = {
    subscribe: Type.shape({
        subscriber: Type.shape({
            avatar: Type.string,
            nickname: Type.string.isRequired,
        }).isRequired
    }).isRequired
}

export default SubscribeCard