import gql from "graphql-tag"

const UserSearchFragment = gql`
    fragment UserSearchFragment on UserConnection {
        edges {
            node {
                nickname
                avatar
            }
        }
        pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
        }
    }
`

const PostSearchFragment = gql`
    fragment PostSearchFragment on PostConnection {
        edges {
            node {
                text
                date
                id
                likedByMe
                likesCount
                user {
                    avatar
                    nickname
                }
            }
        }
        pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
        }
    }
`

export const SEARCH = gql`
    query Search($query: String!, $firstPosts: Int!, $firstUsers: Int!, $afterUser: String, $afterPost: String) {
        search(query: $query) {
            users(first: $firstUsers, after: $afterUser) {
                ...UserSearchFragment
            }
            posts(first: $firstPosts, after: $afterPost) {
                ...PostSearchFragment
            }
        }
    }
    ${PostSearchFragment}
    ${UserSearchFragment}
`


export const SEARCH_USERS = gql`
    query SearchUsers($query: String!, $first: Int!, $after: String) {
        search(query: $query) {
            users(first: $first, after: $after) {
                ...UserSearchFragment
            }
        }
    }
    ${UserSearchFragment}
`


export const SEARCH_POSTS = gql`
    query SearchPosts($query: String!, $first: Int!, $after: String) {
        search(query: $query) {
            posts(first: $first, after: $after) {
                ...PostSearchFragment
            }
        }
    }
    ${PostSearchFragment}
`