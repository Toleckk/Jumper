import React from 'react';
import Type from 'prop-types';
import Flex from "components/Common/atoms/Flex";
import Container from "./Container";
import StyledHeader from "./StyledHeader";
import StyledMain from "./StyledMain";
import DateContainer from "./Date";
import Like from "./Like";

const Post = ({post}) => {
    const date = new Date(post.date).toLocaleString();
    return <Container>
        <Flex justify="space-between">
            <StyledHeader>{post.owner.nickname}</StyledHeader>
            <DateContainer>{date}</DateContainer>
        </Flex>
        <StyledMain>{post.text}</StyledMain>
        <Like post={post}/>
    </Container>;
};

Post.propTypes = {
    post: Type.shape({
        text: Type.string.isRequired,
        owner: Type.shape({
            nickname: Type.string.isRequired,
        }).isRequired,
        likesCount: Type.number.isRequired,
        date: Type.string.isRequired,
        _id: Type.string.isRequired,
        isMyLike: Type.bool.isRequired
    }).isRequired
};

export default React.memo(Post);