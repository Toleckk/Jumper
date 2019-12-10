import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import Type from 'prop-types';
import {POSTS} from "apollo/requests/post";
import Container from "./atoms/Container";
import PostForm from "./PostForm";
import Post from "./Post";
import StyledSpan from "./atoms/StyledSpan";

const Posts = ({nickname, isMyAccount}) => {
    const {loaded, data} = useQuery(POSTS, {variables: {owner: nickname}});

    if (loaded || !data)
        return <></>;

    return <Container>
        {isMyAccount && <PostForm/>}
        {data.posts.length
            ? data.posts.map((post, i) => <Post key={i} post={post}/>)
            : <StyledSpan>Ещё нет ни одного поста</StyledSpan>
        }</Container>;
};

Posts.propTypes = {
    isMyAccount: Type.bool.isRequired,
    nickname: Type.string.isRequired,
};

export default Posts;