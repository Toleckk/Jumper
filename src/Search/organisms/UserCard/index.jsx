import React from "react"
import Type from 'prop-types'
import {Avatar, Nickname} from "User/atoms"
import Container from './Container'
import {Link} from "Common/atoms"

const UserCard = ({user}) => {
    return (
        <Link component={Container} to={`/@${user.nickname}`}>
            <Avatar size="search" src={user.avatar}/>
            <span>
                <Nickname>{'@' + user.nickname}</Nickname>
            </span>
        </Link>
    )
}

UserCard.propTypes = {
    user: Type.shape({
        nickname: Type.string.isRequired,
        avatar: Type.string.isRequired,
    }).isRequired
}

export default React.memo(UserCard)