import './styles.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './reducers'

(() => {
    const store = createStore(reducer)

    const app = document.createElement('div')

    document.body.appendChild(app)

    ReactDOM.render(
        <Provider store={ store }>
            <App />
        </Provider>,
        app
    )
})()
