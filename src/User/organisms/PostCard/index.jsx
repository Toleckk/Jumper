import React, {useCallback, useState} from 'react'
import Type from 'prop-types'
import {Flex, Link} from "Common/atoms"
import {Avatar, Nickname} from "../../atoms"
import {PostAction} from "../../molecules"
import {ActionsContainer, AvatarContainer, Container, PostContent, PostData} from "./containers"
import DeletePost from "../../molecules/DeletePost"
import LikeButton from "../../molecules/LikeButton"

const PostCard = ({post}) => {
    const [pending, setPending] = useState(false)
    const setIsPending = useCallback(() => setPending(true), [setPending])

    return <Container pending={pending}>
        <Flex align="center" as="header">
            <Link to={`/@${post.user.nickname}`}>
                <AvatarContainer>
                    <Avatar size="small" src={post.user.avatar}/>
                </AvatarContainer>
            </Link>
            <Link to={`/@${post.user.nickname}`} component={Nickname} size="small">
                {post.user.nickname}
            </Link>
            <PostData>{new Date(post.date).toLocaleString()}</PostData>
            <DeletePost id={post.id} user={post.user} onDelete={setIsPending}/>
        </Flex>
        <PostContent>
            {post.text}
        </PostContent>
        <ActionsContainer>
            <PostAction icon="view" count="150K"/>
            <PostAction icon="comment" count="150K"/>
            {/*<PostAction icon="share" count="150K"/>*/}
            <LikeButton post={post} onPending={setPending}/>
        </ActionsContainer>
    </Container>
}

PostCard.propTypes = {
    post: Type.shape({
        id: Type.string.isRequired,
        text: Type.string.isRequired,
        likesCount: Type.number.isRequired,
        date: Type.string.isRequired,
        likedByMe: Type.bool.isRequired,
        user: Type.shape({
            avatar: Type.string,
            nickname: Type.string.isRequired,
        }).isRequired,
    }).isRequired
}

export default React.memo(PostCard)