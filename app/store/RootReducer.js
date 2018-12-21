import { combineReducers } from 'redux'
import chat from './chat/Reducer'

const RootReducer = combineReducers({
    chat
})
export default RootReducer