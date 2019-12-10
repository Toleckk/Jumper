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
    query User($nickname: String!){
        user(nickname: $nickname) {
            nickname
            avatar
            postsCount
            subscribersCount
            subscribesCount
            registration
            description {
                about
                age
                from
            }
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

export const UPDATE_USER = gql`
    mutation UpdateUser($user: UserInput){
        updateUser(user: $user)
    }
`;