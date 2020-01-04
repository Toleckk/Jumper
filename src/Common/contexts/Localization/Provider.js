import React, {useState, useEffect, useCallback} from "react";
import Context from "./Context";
import {getLang, makeFlat} from "./helpers";
import translate from "./translate";

export default ({children}) => {
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState(false);
    const [activeLang, setLang] = useState({});

    const changeLang = useCallback(async lang => {
        if (lang !== activeLang.lang) {
            setLoaded(true);
            getLang(lang)
                .then(lang => setLang(lang))
                .catch(setErrors)
                .finally(() => setLoaded(false));
        }
    }, [activeLang.lang]);

    useEffect(() => {
        changeLang('ru');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const value = {errors, loaded, changeLang, t: translate(makeFlat(activeLang))};

    return <Context.Provider value={value}>
        {children}
    </Context.Provider>;
};