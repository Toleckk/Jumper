import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {LocalizationProvider} from "contexts/Localization";
import dark from "theme/dark";
import Landing from "./Landing";


const App = () =>
    <BrowserRouter>
        <LocalizationProvider lang="ru">
            <ThemeProvider theme={dark}>
                <Landing/>
            </ThemeProvider>
        </LocalizationProvider>
    </BrowserRouter>;

export default App;