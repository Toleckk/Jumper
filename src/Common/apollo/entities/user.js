import gql from 'graphql-tag'

export const DEFAULT_LIGHT_AVATAR = 'https://res.cloudinary.com/jumper/image/upload/v1590683553/defaultAvatar_yg4kdh.png'

export const DEFAULT_DARK_AVATAR = 'https://res.cloudinary.com/jumper/image/upload/v1590685175/defaultAvatar_gray_hzr2sc.png'

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
        isSubscribePending
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
    query GetUser($nickname: String!, $postsCount: Int, $after: String) {
        user(nickname: $nickname) {
            ...UserFragment
            followsIntersectionCount
            posts(first: $postsCount, after: $after) {
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
                        commentsCount
                    }
                }
                pageInfo {
                    hasNextPage
                    endCursor
                }
            }
            followsIntersection {
                avatar
            }
        }
    }
    ${UserFragment}
`;

export const UPDATE_PROFILE_INFORMATION = gql`
    mutation UpdateProfileInformation($profileInformation: ProfileInformationInput!) {
        updateProfileInformation(profileInformation: $profileInformation)
    }
`

export const UPDATE_PASSWORD = gql`
    mutation UpdatePassword($password: PasswordInput!) {
        updatePassword(password: $password)
    }
`

export const UPDATE_PRIVATE = gql`
    mutation UpdatePrivate($isPrivate: Boolean!) {
        updatePrivate(isPrivate: $isPrivate)
    }
`