import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store'

import Board from './components/Board/Board'

import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Board />
            </Provider>
        );
    }
}