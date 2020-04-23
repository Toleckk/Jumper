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