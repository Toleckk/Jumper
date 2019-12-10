import {gql} from 'apollo-boost';

export const CREATE_POST = gql`
    mutation CreatePost($post: PostInput) {
        createPost(post: $post)
    }
`;

export const POSTS = gql`
    query Posts ($owner: String!) {
        posts(owner: $owner) {
            owner {
                nickname
            }
            _id
            date
            text
            likesCount
            isMyLike
        }
    }
`;