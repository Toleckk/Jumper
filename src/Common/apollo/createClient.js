import ApolloClient from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {onError} from 'apollo-link-error'
import {ApolloLink} from 'apollo-link'
import {createUploadLink} from "apollo-upload-client"

const createClient = setError => new ApolloClient({
    link: ApolloLink.from([
        onError((e) => {
            if (e.graphQLErrors && e.graphQLErrors.some(e => e.message === 'Not Found'))
                setError(e)
        }),
        createUploadLink({
            uri: 'http://localhost:4000/',
            credentials: 'include',
            headers: {
                "keep-alive": "true"
            },
            fetchOptions: {
                mode: 'no-cors'
            }
        })
    ]),
    cache: new InMemoryCache()
})

export default createClient