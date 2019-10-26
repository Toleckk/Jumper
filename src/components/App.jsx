import React from 'react';
import Landing from "./Landing";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import dark from "../theme/dark";


const App = () =>
    <BrowserRouter>
        <ThemeProvider theme={dark}>
            <Landing/>
        </ThemeProvider>
    </BrowserRouter>;

export default App;