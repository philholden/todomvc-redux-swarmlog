import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import 'todomvc-app-css/index.css'
import keys from './keys.json'
import {
  addReduxSwarmLog,
  configureReduxSwarmLog
} from '@philholden/redux-swarmlog'

const store = configureStore()
configureReduxSwarmLog({ reduxStore: store })
addReduxSwarmLog({ name: 'todos', keys })

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
