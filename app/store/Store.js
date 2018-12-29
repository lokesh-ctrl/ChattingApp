import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './RootReducer'


const configureStore = () => {
    const middleware = [thunk]
    return createStore(RootReducer, applyMiddleware(...middleware))
}

export default configureStore