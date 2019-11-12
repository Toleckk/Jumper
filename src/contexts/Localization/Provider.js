import React, {useState} from "react";
import Context from "./Context";
import {getLang} from "./helpers";
import defaultLanguage from "./defaultLanguage";

export default ({children}) => {
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState(false);
    const [activeLang, setLang] = useState(defaultLanguage);

    const changeLang = async lang => {
        if (lang !== activeLang.lang) {
            setLoaded(true);
            await getLang(lang).then(setLang).catch(setErrors);
            setLoaded(false);
        }
    };

    const value = {errors, loaded, changeLang, ...activeLang};

    return <Context.Provider value={value}>
        {children}
    </Context.Provider>;
};