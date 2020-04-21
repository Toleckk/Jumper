import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/react-hooks";
import Title from "react-document-title";
import {Loader} from "Common/molecules";
import {GET_USER} from "Common/apollo/entities/user";
import {POSTS_CONNECTION} from "Common/apollo/entities/post";
import {UserCard, Header, PostCard} from "./organisms";
import MainContainer from './MainContainer';
import StyledDivider from "./StyledDivider";
import PostsContainer from "./PostsContainer";

const User = () => {
    const {nickname} = useParams();
    const {data, loading} = useQuery(GET_USER, {variables: {nickname}});
    const {data: posts, loading: postsLoading} = useQuery(POSTS_CONNECTION, {variables: {nickname, first: 20}});
    const [header, setHeader] = useState(false);

    if(loading || !data)
        return <Loader/>;

    return <Title title={nickname + ' | Jumper'}>
        <MainContainer>
            {!header && <Header user={data.user}/>}
            <UserCard user={data.user} onHide={setHeader}/>
            <StyledDivider/>
            <PostsContainer>
                {!postsLoading && (!posts || !posts.length) ? 'Ничего нет' : ''}
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </PostsContainer>
            <div style={{height: '5000px'}}></div>
        </MainContainer>
    </Title>;
};

export default React.memo(User);