import {useCallback, useState} from "react"

const useHover = () => {
    const [hovered, setHovered] = useState(false)
    const onMouseEnter = useCallback(() => setHovered(true), [setHovered])
    const onMouseLeave = useCallback(() => setHovered(false), [setHovered])

    return {hoverProps: {onMouseEnter, onMouseLeave}, hovered}
}

export default useHover