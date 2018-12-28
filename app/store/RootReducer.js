import { combineReducers } from 'redux'
import chat from './chat/Reducer'
import user from './user/Reducer'

const RootReducer = combineReducers({
    chat,
    user
})
export default RootReducer