import React, {useCallback, useState} from 'react'
import {useParams} from "react-router-dom"
import {useQuery} from "@apollo/react-hooks"
import Title from "react-document-title"
import {GET_USER} from "Common/apollo/entities/user"
import {Pagination, Loader as BigLoader} from "Common/molecules"
import useIsMe from "Common/hooks/useIsMe"
import {Header, PostCard, PostForm, UserCard} from "./organisms"
import StyledDivider from "./StyledDivider"
import PostsContainer from "./PostsContainer"
import Loader from "../Feed/atoms/Loader"
import {PrivateScreen} from "./molecules"


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
        <Title title={nickname + ' | Skyflux'}>
            <>
                {!header && <Header user={data.user}/>}
                <UserCard user={data.user} onHide={setHeader}/>
                <StyledDivider/>
                {isMe(data.user) ? <PostForm/> : ''}
                <PostsContainer>{
                    data.user.private && !data.user.isReadByMe
                        ? <PrivateScreen/>
                        : (
                            <Pagination
                                hasMore={data.user.posts.pageInfo.hasNextPage}
                                loadMore={loadMore}
                                Loader={() => <Loader>Загрузка...</Loader>}
                                getScrollable={() => window.document}
                            >
                                {!data.user.posts.edges.length
                                    ? <h1 align="center" key="nothing">Постов пока нет</h1>
                                    : data.user.posts.edges.map(({node, cursor}) => <PostCard post={node} key={cursor}/>)
                                }
                            </Pagination>
                        )
                }</PostsContainer>
            </>
        </Title>
    )
}

export default React.memo(User)