import React, {useEffect, useMemo} from 'react'
import Type from 'prop-types'
import {LIKE, UNLIKE} from "Common/apollo/entities/like"
import {GET_USER} from "Common/apollo/entities/user"
import {PostAction} from "../index"
import Container from "./Container"
import {useMutation} from "@apollo/react-hooks"


const LikeButton = ({post, onPending}) => {
    const options = useMemo(() => ({
        variables: {post: post.id},
        refetchQueries: [{
            query: GET_USER,
            variables: {nickname: post.user.nickname},
        }],
        awaitRefetchQueries: true,
    }), [post.id])

    const [like, {loading: liking}] = useMutation(LIKE, options)
    const [unlike, {loading: unliking}] = useMutation(UNLIKE, options)

    useEffect(() => void(onPending(liking || unliking)), [liking, unliking]);

    return (
        <Container active={post.likedByMe}>
            <PostAction icon="love" count={post.likesCount} onClick={post.likedByMe ? unlike : like} disabled={liking || unliking}/>
        </Container>
    )
}

LikeButton.propTypes = {
    post: Type.shape({
        id: Type.string.isRequired,
        likedByMe: Type.bool.isRequired,
        likesCount: Type.number.isRequired,
        user: Type.shape({
            nickname: Type.string.isRequired,
        }).isRequired,
    }).isRequired,
    onPending: Type.func.isRequired,
}

export default React.memo(LikeButton)