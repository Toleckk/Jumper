import {gql} from 'apollo-boost';

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