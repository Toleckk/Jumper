import React, {useCallback, useState} from 'react'
import {useParams} from "react-router-dom"
import {useQuery} from "@apollo/react-hooks"
import Title from "react-document-title"
import InfiniteScroll from 'react-infinite-scroller'
import {GET_USER} from "Common/apollo/entities/user"
import {Loader as BigLoader} from "Common/molecules"
import useIsMe from "Common/hooks/useIsMe"
import {Navigation} from "Common/organisms"
import {Header, PostCard, PostForm, UserCard} from "./organisms"
import MainContainer from './MainContainer'
import StyledDivider from "./StyledDivider"
import PostsContainer from "./PostsContainer"
import Loader from "../Feed/Loader"

const first = 25


const updateQuery = (previousResult, {fetchMoreResult}) => {
    const {pageInfo, edges} = fetchMoreResult.user.posts
    const {__typename} = previousResult.user.posts
    const previousEdges = previousResult.user.posts.edges

    return edges.length
        ? {
            user: {
                ...previousResult.user,
                posts: {__typename, edges: previousEdges.concat(edges), pageInfo}
            }
        }
        : previousResult
}


const User = () => {
    const {nickname} = useParams()
    const isMe = useIsMe()
    const {data, loading, fetchMore} = useQuery(GET_USER, {variables: {nickname, postsCount: 25}})
    const [header, setHeader] = useState(false)

    const loadMore = useCallback(() => fetchMore({
        updateQuery,
        variables: {postsCount: first, after: data.user.posts.pageInfo.endCursor}
    }), [fetchMore, data])

    if (loading)
        return <BigLoader/>

    return (
        <Title title={nickname + ' | Jumper'}>
            <>
                {!header && <Header user={data.user}/>}
                <UserCard user={data.user} onHide={setHeader}/>
                <StyledDivider/>
                {isMe(data.user) ? <PostForm/> : ''}
                <PostsContainer>
                    <InfiniteScroll
                        hasMore={data.user.posts.pageInfo.hasNextPage}
                        loadMore={loadMore}
                        loader={<Loader>Загрузка...</Loader>}
                    >
                        {!data.user.posts.edges.length
                            ? <h1 align="center">Постов пока нет</h1>
                            : data.user.posts.edges.map(({node, cursor}) => <PostCard post={node} key={cursor}/>)
                        }
                    </InfiniteScroll>
                </PostsContainer>
            </>
        </Title>
    )
}

export default React.memo(User)