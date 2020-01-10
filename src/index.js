import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {ApolloProvider} from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import {ThemeProvider} from "styled-components";
import {LocalizationProvider} from "Common/contexts/Localization";
import {GlobalAppContainer} from "Common/atoms";
import dark from "Common/theme/dark";
import App from "App";
import 'index.css';
import * as serviceWorker from 'serviceWorker';

ReactDOM.render(<ThemeProvider theme={dark}>
        <ApolloProvider client={new ApolloClient()}>
            <LocalizationProvider lang="ru">
                <BrowserRouter>
                    <GlobalAppContainer>
                        <App/>
                    </GlobalAppContainer>
                </BrowserRouter>
            </LocalizationProvider>
        </ApolloProvider>
    </ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();