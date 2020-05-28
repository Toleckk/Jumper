import gql from 'graphql-tag'

export const CREATE_POST = gql`
    mutation CreatePost($text: String!) {
        createPost(post: {text: $text})
    }
`;

export const DELETE_POST = gql`
    mutation RemovePost($id: String!) {
        removePost(id: $id)
    }
`;

export const GET_POST = gql`
    query GetPost($id: String!) {
        post(id: $id) {
            commentsCount
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
`