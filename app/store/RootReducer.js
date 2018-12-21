import { combineReducers } from 'redux'
import chat from './chat/reducer'

const RootReducer = combineReducers({
    chat
})
export default RootReducer