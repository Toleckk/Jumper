import {gql} from "apollo-boost";

export const CREATE = gql`
    mutation CreateRegistration($registration: RegistrationInput!){
        createRegistration(registration: $registration)
    }
`;