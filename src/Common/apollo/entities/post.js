import {gql} from 'apollo-boost';

export const POSTS_CONNECTION = gql`
    query PostsConnection($owner: String!, $after: String, $first: Int!) {
        postsConnection(owner: $owner, after: $after, first: $first) {
            edges {
                node {
                    text
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                endCursor
            }
        }
    }
`;

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