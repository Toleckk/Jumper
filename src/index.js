import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import 'index.css';
import * as serviceWorker from 'serviceWorker';
import App from 'components/App';
import {LocalizationProvider} from "contexts/Localization";
import dark from "theme/dark";

ReactDOM.render(<BrowserRouter>
    <LocalizationProvider lang="ru">
        <ThemeProvider theme={dark}>
            <App/>
        </ThemeProvider>
    </LocalizationProvider>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();