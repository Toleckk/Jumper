import {useCallback, useMemo} from 'react'
import {useApolloClient, useMutation} from '@apollo/react-hooks'
import {LOGOUT} from '../apollo/entities/session'
import {ME} from '../apollo/entities/user'

const EMPTY = []

const useLogout = (onCompleted = null, refetchQueries = EMPTY, ...args) => {
    const client = useApolloClient()

    const queries = useMemo(() => [...refetchQueries, {query: ME}], [refetchQueries])

    const callback = useCallback(
        (...args) => client.clearStore().then(onCompleted && onCompleted(...args)),
        [onCompleted, client],
    )

    return useMutation(LOGOUT, {refetchQueries: queries, onCompleted: callback, ...args, awaitRefetchQueries: true})
}

export default useLogout