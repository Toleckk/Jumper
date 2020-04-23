import gql from 'graphql-tag'

export const LIKE = gql`
    mutation Like($post: String!) {
        createLike(like: {post: $post})
    }
`;

export const UNLIKE = gql`
    mutation Unlike($post: String!) {
        removeLike(like: {post: $post})
    }
`;