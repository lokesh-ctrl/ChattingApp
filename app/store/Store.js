import { createStore, applyMiddleware ,compose} from 'redux'
import thunk from 'redux-thunk'
import devToolsEnhancer from 'remote-redux-devtools';
import RootReducer from './RootReducer'
import { composeWithDevTools } from 'remote-redux-devtools';


const configureStore = () => {
    const middleware = [thunk]
    return createStore(RootReducer, composeWithDevTools(applyMiddleware(...middleware)))
}

export default configureStore