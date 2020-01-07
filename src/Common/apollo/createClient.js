import ApolloClient from "apollo-boost";

const createClient = setError => new ApolloClient({
    onError: (e) => {
        if (e.graphQLErrors && e.graphQLErrors.some(e => e.message === 'Not Found'))
            setError(e);
    }
});

export default createClient;