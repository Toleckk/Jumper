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
        isReadByMe
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
    query GetUser($nickname: String!, $postsCount: Int) {
        user(nickname: $nickname) {
            ...UserFragment
            followsIntersectionCount
            posts(first: $postsCount) {
                edges {
                    node {
                        user {
                            nickname
                            avatar
                        }
                        date
                        id
                        likesCount
                        text
                        likedByMe
                    }
                }
            }
            followsIntersection {
                avatar
            }
        }
    }
    ${UserFragment}
`;