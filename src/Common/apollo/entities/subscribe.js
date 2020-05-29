import gql from 'graphql-tag'

export const SUBSCRIBE = gql`
    mutation Subscribe ($account: String!) {
        createSubscribe(subscribe: {account: $account})
    }
`;

export const UNSUBSCRIBE = gql`
    mutation Unsubscribe ($account: String!) {
        removeSubscribe(subscribe: {account: $account})
    }
`;

export const GET_PENDING = gql`
    query GetPending ($after: String, $first: Int) {
        getPending(after: $after, first: $first) {
            edges {
                cursor
                node {
                    subscriber {
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