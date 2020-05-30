import {useCallback, useState} from 'react'

const useBooleanState = defaultState => {
    const [state, setState] = useState(defaultState)

    const setTrue = useCallback(() => setState(true), [setState])
    const setFalse = useCallback(() => setState(false), [setState])

    return [state, setTrue, setFalse, setState]
}

export default useBooleanState