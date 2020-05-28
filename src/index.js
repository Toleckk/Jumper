import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom"
import {ApolloProvider} from "@apollo/react-hooks"
import {LocalizationProvider} from "Common/contexts/Localization"
import {GlobalAppContainer} from "Common/atoms"
import {createClient} from "Common/apollo"
import {Theme} from "Common/theme"
import App from "App"
import 'index.css'
import * as serviceWorker from 'serviceWorker'
import 'focus-visible/dist/focus-visible.min'

const client = createClient(console.log)

ReactDOM.render(<Theme>
    <ApolloProvider client={client}>
        <LocalizationProvider lang="ru">
            <BrowserRouter>
                <GlobalAppContainer>
                    <App/>
                </GlobalAppContainer>
            </BrowserRouter>
        </LocalizationProvider>
    </ApolloProvider>
</Theme>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()