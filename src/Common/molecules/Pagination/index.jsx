import React, {useEffect, useMemo, useRef, useState} from "react"
import Type from 'prop-types'
import useBooleanState from "../../hooks/useBooleanState"


const Pagination = ({children, treshold, hasMore, loadMore, Loader, Component, reverse, style, loaderKey, ...props}) => {
    const [top, setTop] = useState(null)
    const [loading, setLoading, setUnloading] = useBooleanState(false)

    const defaultStyle = useMemo(
        () => ({display: 'flex', flexDirection: reverse ? 'column-reverse' : 'column', ...style}),
        [reverse, style]
    )

    const ref = useRef()

    useEffect(() => {
        const onScroll = ({target}) => setTop(
            reverse
                ? target.scrollTop
                : target.scrollHeight - target.scrollTop - target.clientHeight
        )

        ref.current.addEventListener('scroll', onScroll)
        return () => ref.current.removeEventListener('scroll', onScroll)
    }, [])


    useEffect(() => {
        if (top !== null && top < treshold && hasMore && !loading) {
            setLoading()
            Promise.resolve(loadMore()).finally(setUnloading)
        }
    }, [top, hasMore, loadMore, treshold])

    return (
        <>
            <Component style={defaultStyle} ref={ref} {...props}>
                {children}
                {loading && Loader && <Loader key={loaderKey}/>}
            </Component>
        </>
    )
}

Pagination.defaultProps = {
    treshold: 50,
    Component: 'div',
    reverse: false,
    style: {},
    loaderKey: 'loader',
}

Pagination.propTypes = {
    treshold: Type.number,
    hasMore: Type.bool.isRequired,
    loadMore: Type.func.isRequired,
    reverse: Type.bool,
    style: Type.object,
    loaderKey: Type.string,
}

export default Pagination