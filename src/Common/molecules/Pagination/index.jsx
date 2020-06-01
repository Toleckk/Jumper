import React, {useCallback, useEffect, useMemo, useRef, useState} from "react"
import Type from 'prop-types'
import useBooleanState from "../../hooks/useBooleanState"


const Pagination = ({children, treshold, hasMore, loadMore, Loader, Component, reverse, style, loaderKey, getScrollable, ...props}) => {
    const [top, setTop] = useState(null)
    const [loading, setLoading, setUnloading] = useBooleanState(false)

    const defaultStyle = useMemo(
        () => ({display: 'flex', flexDirection: reverse ? 'column-reverse' : 'column', ...style}),
        [reverse, style]
    )

    const ref = useRef()

    const onScroll = useCallback(() => {
        const target = getScrollable ? getScrollable() : ref.current
        const element = target.documentElement || target
        setTop(
            reverse
                ? element.scrollTop
                : element.scrollHeight - element.scrollTop - element.clientHeight
        )
    }, [setTop, reverse, getScrollable])

    useEffect(() => {
        const current = getScrollable ? getScrollable() : ref.current
        current.addEventListener('scroll', onScroll)
        return () => current.removeEventListener('scroll', onScroll)
    }, [reverse, onScroll, getScrollable])


    useEffect(() => {
        const interval = setInterval(onScroll, 300)
        return () => clearInterval(interval)
    }, [onScroll])


    useEffect(() => {
        if (top !== null && top < treshold && hasMore && !loading) {
            setLoading()
            Promise.resolve(loadMore()).finally(() => {
                onScroll()
                setUnloading()
            })
        }
    }, [top, hasMore, loadMore, treshold, loading, setLoading, setUnloading, onScroll])


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
    getScrollable: null,
}

Pagination.propTypes = {
    treshold: Type.number,
    hasMore: Type.bool.isRequired,
    loadMore: Type.func.isRequired,
    reverse: Type.bool,
    style: Type.object,
    loaderKey: Type.string,
    getScrollable: Type.func,
}

export default Pagination