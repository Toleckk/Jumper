import React, {useCallback, useState} from 'react'
import Type from 'prop-types'
import {Flex, Link} from "Common/atoms"
import {Avatar, Nickname} from "../../atoms"
import {PostAction} from "../../molecules"
import {ActionsContainer, AvatarContainer, Container, PostContent, PostData, Drawer} from "./containers"
import DeletePost from "../../molecules/DeletePost"
import LikeButton from "../../molecules/LikeButton"
import Comments from "Comments"
import useBooleanState from "Common/hooks/useBooleanState"

const PostCard = ({post, withDelete, withClick}) => {
    const [pending, setPending] = useState(false)
    const setIsPending = useCallback(() => setPending(true), [setPending])

    const [visible, setVisible, setInvisible] = useBooleanState(false)

    return (
        <Container pending={pending} key={post.id}>
            <Flex align="center" as="header">
                <Link to={`/@${post.user.nickname}`}>
                    <AvatarContainer>
                        <Avatar size="small" src={post.user.avatar}/>
                    </AvatarContainer>
                </Link>
                <Nickname size="small">
                    <Link to={`/@${post.user.nickname}`}>
                        {post.user.nickname}
                    </Link>
                </Nickname>
                <PostData>{new Date(post.date).toLocaleString()}</PostData>
                {withDelete && <DeletePost id={post.id} user={post.user} onDelete={setIsPending}/>}
            </Flex>
            <PostContent>
                {post.text}
            </PostContent>
            <ActionsContainer>
                {/*<PostAction icon="view" count="150K"/>*/}
                <PostAction icon="comment" count={post.commentsCount} onClick={withClick ? setVisible : undefined}/>
                {/*<PostAction icon="share" count="150K"/>*/}
                <LikeButton post={post} onPending={setPending}/>
            </ActionsContainer>
            <Drawer
                placement="bottom"
                height="auto"
                width="auto"
                visible={visible}
                onClose={setInvisible}
                maskStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
            >
                <Comments post={post}/>
            </Drawer>
        </Container>
    )
}

PostCard.defaultProps = {
    withDelete: true,
    withClick: true,
}

PostCard.propTypes = {
    post: Type.shape({
        id: Type.string.isRequired,
        text: Type.string.isRequired,
        likesCount: Type.number.isRequired,
        date: Type.string.isRequired,
        likedByMe: Type.bool.isRequired,
        commentsCount: Type.number.isRequired,
        user: Type.shape({
            avatar: Type.string,
            nickname: Type.string.isRequired,
        }).isRequired,
    }).isRequired,
    withDelete: Type.bool,
    withClick: Type.bool,
}

export default React.memo(PostCard)