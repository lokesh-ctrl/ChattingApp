import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import RootReducer from './RootReducer'

const configureStore = () => {
    const middleware = [thunk]
    return createStore(RootReducer, applyMiddleware(...middleware))
}

export {configureStore}