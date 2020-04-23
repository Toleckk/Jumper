import gql from 'graphql-tag'

export const FEED = gql`    
    query Feed($after: String, $first: Int!) {
        feed(after: $after, first: $first) {
            edges {
                node {
                    date
                    id
                    likedByMe
                    likesCount
                    text
                    user {
                        avatar
                        nickname
                    }
                }
            }
            pageInfo {
                endCursor
                hasNextPage
            } 
        }
    }
`