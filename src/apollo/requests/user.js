import {gql} from 'apollo-boost';

export default gql`
    query {
        me {
            nickname
            avatar
        }
    }
`;