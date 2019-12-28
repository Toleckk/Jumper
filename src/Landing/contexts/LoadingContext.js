import React, {createContext, useContext, useState} from "react";

const LoadingContext = createContext({});

export const useLoadingContext = () => useContext(LoadingContext);

export const LoadingContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const value = {loading, setLoading};

    return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
};