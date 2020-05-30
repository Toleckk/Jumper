import {useCallback, useMemo} from 'react'
import {useApolloClient, useMutation} from '@apollo/react-hooks'
import {LOGOUT} from '../apollo/entities/session'
import {ME} from '../apollo/entities/user'

const useLogout = (onCompleted = null, refetchQueries = [], ...args) => {
    const client = useApolloClient()

    const callback = useCallback(
        (...args) => {
            if (onCompleted)
                onCompleted(...args)

            return client.resetStore()
        },
        [onCompleted, client.resetStore],
    )

    const queries = useMemo(() => [...refetchQueries, [{query: ME}]], [refetchQueries])

    return useMutation(LOGOUT, {onCompleted: callback, refetchQueries: queries, ...args})
}

export default useLogout