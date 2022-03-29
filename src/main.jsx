import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import PokeApp from './PokeApp'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './redux/index'
import { Provider } from 'react-redux'

const store = createStore(
  rootReducer,
  composeWithDevTools()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PokeApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
