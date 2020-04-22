import React, {useState} from 'react'
import {useParams} from "react-router-dom"
import {useQuery} from "@apollo/react-hooks"
import Title from "react-document-title"
import {GET_USER} from "Common/apollo/entities/user"
import {Loader} from "Common/molecules"
import useIsMe from "Common/hooks/useIsMe"
import {Navigation} from "Common/organisms"
import {Header, PostCard, PostForm, UserCard} from "./organisms"
import MainContainer from './MainContainer'
import StyledDivider from "./StyledDivider"
import PostsContainer from "./PostsContainer"



const User = () => {
    const {nickname} = useParams()
    const isMe = useIsMe();
    const {data, loading} = useQuery(GET_USER, {variables: {nickname, first: 5}})
    const [header, setHeader] = useState(false)

    if (loading || !data)
        return <Loader/>

    return (
        <Title title={nickname + ' | Jumper'}>
            <MainContainer>
                {!header && <Header user={data.user}/>}
                <UserCard user={data.user} onHide={setHeader}/>
                <StyledDivider/>
                {isMe(data.user) ? <PostForm/> : ''}
                <PostsContainer>
                    {!data.user.posts.edges.length
                        ? <h1 align="center">Постов пока нет</h1>
                        : data.user.posts.edges.map(({node}) => <PostCard post={node} key={node.id}/>)
                    }
                </PostsContainer>
                <Navigation/>
            </MainContainer>
        </Title>
    )
}

export default React.memo(User)