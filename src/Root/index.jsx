import React, {useState, Suspense} from 'react';
import {ThemeProvider} from "styled-components";
import {Loader} from "Common/molecules";
import dark from "Common/theme/dark";

const App = React.lazy(() => import('./App'));
const NotFound = React.lazy(() => import('./NotFound'));

const Root = () => {
    const [error, setError] = useState(null);

    // TODO: background
    return <ThemeProvider theme={dark}>
        <Suspense fallback={<Loader/>}>{
            error
                ? <NotFound/>
                : <App setError={setError}/>
        }</Suspense>
    </ThemeProvider>;
};

export default React.memo(Root);