import {gql} from "apollo-boost";

export const UserFragment = gql`
    fragment UserFragment on User {
        nickname
        avatar
        registration
        subscribersCount
        subscribesCount
        postsCount
        private
        description {
            about
            birthday
            from
        }
    }
`;

export const ME = gql`
    query Me {
        me {
            ...UserFragment
        }
    }
    ${UserFragment}
`;

export const GET_USER = gql`
    query GetUser($nickname: String!) {
        user(nickname: $nickname) {
            ...UserFragment
            followsIntersectionCount
            followsIntersection {
                avatar
            }
        }
    }
    ${UserFragment}
`;