import React, {useEffect, useRef, useState} from "react"
import Type from 'prop-types'

// TODO: Loading
const Pagination = ({children, treshold, hasMore, loadMore, Loader}) => {
    const [top, setTop] = useState(null)
    const [loading, setLoading] = useState(false)

    const ref = useRef()

    useEffect(() => {
        ref.current.parentElement.addEventListener('scroll', ({target}) => setTop(target.scrollTop))
    }, [])

    useEffect(() => {
        if (top !== null && top < treshold && hasMore && !loading) {
            setLoading(true)
            Promise.resolve(loadMore()).finally(() => setLoading(false))
        }
    }, [top, hasMore, loadMore, treshold])

    return (
        <>
            <div ref={ref}>
                {children}
            </div>
            {loading && Loader && <Loader/>}
        </>
    )
}

Pagination.defaultProps = {
    treshold: 50,
}

Pagination.propTypes = {
    treshold: Type.number,
    hasMore: Type.bool.isRequired,
    loadMore: Type.func.isRequired,
}

export default Pagination