import {gql} from "apollo-boost";

export const CREATE = gql`
    mutation CreateRegistration($nickname: String!, $email: String!){
        createRegistration(registration: {nickname: $nickname, email: $email})
    }
`;

export const CONFIRM = gql`
    mutation ConfirmRegistration($token: String!, $password: String!){
        confirmRegistration(user: {token: $token, password: $password})
    }
`;