import {gql} from 'apollo-boost';

export const ME = gql`
    query {
        me @client {
            nickname
            avatar
        }
    }
`;