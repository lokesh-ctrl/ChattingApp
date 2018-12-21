import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducer from './RootReducer'

const configureStore = () => {
    const middleware = [thunk]
    return createStore(reducer, applyMiddleware(...middleware))
}

export {configureStore}