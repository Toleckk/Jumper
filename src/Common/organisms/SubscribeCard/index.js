import React from "react"
import Type from 'prop-types'
import {Avatar, Icon, Nickname} from "User/atoms"
import {Link, Flex} from "Common/atoms"
import Container from "./Container"
import Button from "./Button"

const SubscribeCard = ({subscribe}) => {

    return (
        <Container>
            <Flex as={Link} to={`/@${subscribe.subscriber.nickname}`}>
                <Avatar size="small" src={subscribe.subscriber.avatar}/>
            </Flex>
            <Nickname size="small">
                <Link to={`/@${subscribe.subscriber.nickname}`}>
                    &nbsp;{subscribe.subscriber.nickname}
                </Link>
            </Nickname>
            <Button>
                <Icon icon="reset"/>
            </Button>
            <Button>
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