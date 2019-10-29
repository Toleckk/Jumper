import React from 'react';
import MainPage from "./MainPage";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import dark from "../theme/dark";


const App = () =>
    <BrowserRouter>
        <ThemeProvider theme={dark}>
            <MainPage/>
        </ThemeProvider>
    </BrowserRouter>;

export default App;