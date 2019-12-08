import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {ApolloProvider} from "@apollo/react-hooks";
import 'index.css';
import * as serviceWorker from 'serviceWorker';
import App from 'components/App';
import {LocalizationProvider} from "contexts/Localization";
import dark from "theme/dark";
import {client} from "apollo";

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <LocalizationProvider lang="ru">
                <ThemeProvider theme={dark}>
                    <App/>
                </ThemeProvider>
            </LocalizationProvider>
        </BrowserRouter>
    </ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();