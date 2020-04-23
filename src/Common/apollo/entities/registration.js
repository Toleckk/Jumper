import gql from 'graphql-tag'

export const CAN_REGISTER = gql`
    query CanRegister($data: RegistrationCheckInput!) {
        canRegister(data: $data)
    }
`;

export const CREATE_REGISTRATION = gql`
    mutation CreateRegistration($nickname: String!, $email: String!){
        createRegistration(registration: {nickname: $nickname, email: $email})
    }
`;

export const CONFIRM_REGISTRATION = gql`
    mutation ConfirmRegistration($token: String!, $password: String!){
        confirmRegistration(user: {token: $token, password: $password})
    }
`;