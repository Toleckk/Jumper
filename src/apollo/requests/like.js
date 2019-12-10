import {gql} from 'apollo-boost';

export const DO_LIKE = gql`
    mutation DoLike($post: String!) {
        createLike(post: $post)
    }
`;