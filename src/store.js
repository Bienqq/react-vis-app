import { createStore } from 'redux'
import chatReducer from './reducers/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export default createStore(chatReducer, composeWithDevTools())
