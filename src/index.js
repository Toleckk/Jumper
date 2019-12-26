import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from "@apollo/react-hooks";
import {ThemeProvider} from "styled-components";
import {BrowserRouter} from "react-router-dom";
import {LocalizationProvider} from "Common/contexts/Localization";
import {client} from "Common/apollo";
import dark from "Common/theme/dark";
import App from 'App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ApolloProvider client={client}>
    <LocalizationProvider lang="ru">
        <ThemeProvider theme={dark}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </LocalizationProvider>
</ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();