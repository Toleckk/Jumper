import React, {useMemo} from "react";
import Type from "prop-types";
import {BrowserRouter} from "react-router-dom";
import {ApolloProvider} from "@apollo/react-hooks";
import {LocalizationProvider} from "Common/contexts/Localization";
import Routes from "./Routes";
import ApolloClient from "apollo-boost";

const App = ({setError}) => {
    const client = useMemo(() => new ApolloClient({
        onError: e => e.graphQLErrors && e.graphQLErrors.some(e => e.message === ' NotFound') && setError(e)
    }), [setError]);

    return <ApolloProvider client={client}>
        <LocalizationProvider lang="ru">
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </LocalizationProvider>
    </ApolloProvider>
};

App.propTypes = {
    setError: Type.func.isRequired
};

export default React.memo(App);