import {gql} from "apollo-boost";

export const ME = gql`
    query Me {
        me {
            nickname
            postsCount
            registration
            subscribersCount
            subscribesCount
        }
    }
`;