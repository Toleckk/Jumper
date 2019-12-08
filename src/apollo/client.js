import ApolloClient, {gql} from 'apollo-boost';

const typeDefs = gql`
    extend type Query {
        me: User
    }
`;

const resolvers = {};

const client = new ApolloClient({typeDefs, resolvers});

export default client;