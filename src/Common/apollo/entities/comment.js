import gql from 'graphql-tag'

export const COMMENT = gql`
    mutation Comment($post: String!, $text: String!) {
        comment(post: $post, text: $text)
    }
`

export const COMMENTS = gql`
    query Comments($post: String!, $first: Int!, $after: String) {
        comments(post: $post, first: $first, after: $after) {
            edges {
                node {
                    id
                    text
                    createdAt
                    user {
                        avatar
                        nickname
                    }
                    post {
                        id
                        user {
                            nickname
                        }
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

export const DELETE_COMMENT = gql`
    mutation DeleteComment($id: String!) {
        deleteComment(id: $id)
    }
`