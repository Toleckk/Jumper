import {gql} from 'apollo-boost';

export const ME = gql`
    query {
        me {
            nickname
            avatar
        }
    }
`;

export const USER = gql`
    query User($id: ID!){
        user(id: $id) {
            nickname
            avatar
            postsCount
            subscribersCount
        }
    }
`;

export const USERS = gql`
    query {
        users {
            nickname
            avatar
        }
    }
`;