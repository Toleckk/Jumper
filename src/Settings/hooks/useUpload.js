import {useCallback, useEffect, useState, useMemo} from 'react'

const useUpload = () => useAsync(upload, false)


const useAsync = (f, auto = true, ...args) => {
    const [pending, setPending] = useState(auto)
    const [value, setValue] = useState(null)
    const [error, setError] = useState(null)

    const execute = useCallback((...args) => {
        setPending(true)
        setValue(null)
        setError(null)

        f(...args)
            .then(setValue)
            .catch(setError)
            .finally(() => setPending(false))
    }, [setPending, setValue, setError, f])

    useEffect(() => {
        if (auto)
            execute(...args)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auto, execute])

    return useMemo(() => ({pending, value, error, execute}), [pending, value, error, execute])
}


const upload = file => {
    const body = new FormData()

    body.append('upload_preset', process.env.REACT_APP_CDN_UPLOAD_PRESET)
    body.append('file', file)

    return fetch(process.env.REACT_APP_CDN_UPLOAD_URL, {method: 'post', body}).then(response => response.json())
}


export default useUpload