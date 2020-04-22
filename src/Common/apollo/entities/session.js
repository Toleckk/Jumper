import {gql} from "apollo-boost";

export const CREATE_SESSION = gql`
    mutation CreateSession($login: String!, $password: String!) {
        createSession(credentials: {login: $login, password: $password})
    }
`;

export const LOGOUT = gql`
    mutation Logout {
        removeSession
    }
`;