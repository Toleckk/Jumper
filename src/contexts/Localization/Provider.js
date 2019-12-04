import React, {useState, useEffect} from "react";
import Context from "./Context";
import {getLang, makeFlat} from "./helpers";
import translate from "./translate";

export default ({children}) => {
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState(false);
    const [activeLang, setLang] = useState({});

    useEffect(() => {
        changeLang('ru');
    }, []);

    const changeLang = async lang => {
        if (lang !== activeLang.lang) {
            setLoaded(true);
            await getLang(lang).then(lang => setLang(lang)).catch(setErrors);
            setLoaded(false);
        }
    };

    const value = {errors, loaded, changeLang, t: translate(makeFlat(activeLang))};

    return <Context.Provider value={value}>
        {children}
    </Context.Provider>;
};