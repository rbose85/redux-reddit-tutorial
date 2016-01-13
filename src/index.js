import './styles.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import configureStore from './configureStore'

import AsyncApp from './components/AsyncApp'


(() => {
    const store = configureStore()
    const app = document.createElement('div')

    document.body.appendChild(app)

    ReactDOM.render(
        <Provider store={ store }>
            <AsyncApp />
        </Provider>, app
    )
})()
