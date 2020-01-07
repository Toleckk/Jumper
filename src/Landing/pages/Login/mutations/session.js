import {gql} from "apollo-boost";

export const CREATE = gql`
    mutation CreateSession($login: String!, $password: String!) {
        createSession(credentials: {login: $login, password: $password})
    }
`;