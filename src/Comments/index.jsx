import React from 'react'
import PostCard from '../User/organisms/PostCard'
import Container from './Container'
import CommentsList from './organisms/CommentsList'
import {CommentsContainer} from './atoms'
import SendForm from "./organisms/SendForm"

const Comments = ({post}) => {
    return (
        <Container>
            <PostCard post={post} withDelete={false} withClick={false}/>
            <CommentsContainer>
                <CommentsList post={post}/>
            </CommentsContainer>
            <SendForm post={post}/>
        </Container>
    )
}

export default React.memo(Comments)