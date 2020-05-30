import {useRef} from 'react'
import useOnClickOutsideLib from "use-onclickoutside"

const useOnClickOutside = handler => {
    const ref = useRef(null)

    useOnClickOutsideLib(ref, handler)

    return ref
}

export default useOnClickOutside