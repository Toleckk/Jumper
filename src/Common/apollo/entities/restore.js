import gql from 'graphql-tag'

export const CREATE_RESTORE = gql`
    mutation CreateRestore($login: String!) {
        createRestore(login: $login)
    }
`

export const CONFIRM_RESTORE = gql`
    mutation ConfirmRestore($password: String!, $token: String!) {
        confirmRestore(password: $password, token: $token)
    }
`