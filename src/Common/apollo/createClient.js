import ApolloClient from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {onError} from 'apollo-link-error'
import {ApolloLink} from 'apollo-link'
import {createHttpLink} from 'apollo-link-http'


const createClient = setError => new ApolloClient({
    link: ApolloLink.from([
        onError((e) => {
            if (e.graphQLErrors && e.graphQLErrors.some(e => e.message === 'Not Found'))
                setError(e)
        }),
        createHttpLink({
            uri: process.env.API_URL,
            fetchOptions: {
                credentials: 'include'
            }
        }),
    ]),
    cache: new InMemoryCache(),
})

export default createClient