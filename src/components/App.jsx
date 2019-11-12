import React from 'react';
import Landing from "./features/Landing";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import dark from "../theme/dark";
import {LocalizationProvider} from "../contexts/Localization";


const App = () =>
    <BrowserRouter>
        <LocalizationProvider lang="ru">
            <ThemeProvider theme={dark}>
                <Landing/>
            </ThemeProvider>
        </LocalizationProvider>
    </BrowserRouter>;

export default App;