import {gql} from "apollo-boost";

export const CREATE = gql`
    mutation CreateRestore($login: String!) {
        createRestore(login: $login)
    }
`;

export const CONFIRM = gql `
    mutation ConfirmRestore($password: String!, $token: String!) {
        confirmRestore(password: $password, token: $token)
    }
`;