import {useCallback, useState} from 'react'

const useBooleanState = defaultState => {
    const [state, setState] = useState(defaultState)

    const setTrue = useCallback(() => setState(true), [setState])
    const setFalse = useCallback(() => setState(false), [setState])
    const invert = useCallback(() => setState(!state), [setState, state])

    return [state, setTrue, setFalse, invert, setState]
}

export default useBooleanState