import {gql} from 'apollo-boost';

export const CAN_REGISTER = gql`
    query CanRegister($data: RegistrationCheckInput!) {
        canRegister(data: $data)
    }
`;