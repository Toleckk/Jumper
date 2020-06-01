import React from 'react'
import {Avatar, Nickname} from 'User/atoms'
import {Flex, Link} from "Common/atoms"
import {AvatarContainer, Container, PostContent, PostData} from "User/organisms/PostCard/containers"
import {useMutation} from "@apollo/react-hooks"
import {DELETE_COMMENT} from "Common/apollo/entities/comment"
import Icon from "../../../User/atoms/Icon"
import useIsMe from "../../../Common/hooks/useIsMe"
import CommentDelete from "./CommentDelete"
import {GET_POST} from "../../../Common/apollo/entities/post"

const CommentCard = ({comment}) => {
    const isMe = useIsMe()

    const [remove, {data, loading}] = useMutation(DELETE_COMMENT, {variables: {id: comment.id}, refetchQueries: [
            {query: GET_POST, variables: {id: comment.post.id}}
        ]})

    return (
        data && data.deleteComment
            ? <CommentDelete>Комментарий удалён</CommentDelete>
            : <Container pending={loading} key={comment.id}>
                <Flex align="center" as="header">
                    <Link to={`/@${comment.user.nickname}`}>
                        <AvatarContainer>
                            <Avatar size="small" src={comment.user.avatar}/>
                        </AvatarContainer>
                    </Link>
                    <Nickname size="small">
                        <Link to={`/@${comment.user.nickname}`}>
                            {comment.user.nickname}
                        </Link>
                    </Nickname>
                    <PostData>{new Date(comment.createdAt).toLocaleString()}</PostData>
                    {(isMe(comment.user) || isMe(comment.post.user)) &&
                    <>
                        &nbsp;
                        &nbsp;
                        <button onClick={remove}>
                            <Icon icon="delete" size="20px"/>
                        </button>
                    </>
                    }
                </Flex>
                <PostContent>
                    {comment.text}
                </PostContent>
            </Container>
    )
}

export default React.memo(CommentCard)