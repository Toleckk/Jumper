import {gql} from "apollo-boost";

export const CREATE = gql`
    mutation CreateRestore($email: String!) {
        createRestore(email: $email)
    }
`;

export const CONFIRM = gql `
    mutation ConfirmRestore($password: String!, $token: String!) {
        confirmRestore(password: $password, token: $token)
    }
`;