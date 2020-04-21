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