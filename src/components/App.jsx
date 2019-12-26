import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {LocalizationProvider} from "contexts/Localization";
import {ApolloProvider} from "@apollo/react-hooks";
import {client} from "apollo";
import dark from "theme/dark";
import Landing from "./Landing";


const App = () =>
    <ApolloProvider client={client}>
        <LocalizationProvider lang="ru">
            <ThemeProvider theme={dark}>
                <BrowserRouter>
                    <Landing/>
                </BrowserRouter>
            </ThemeProvider>
        </LocalizationProvider>
    </ApolloProvider>;

export default React.memo(App);