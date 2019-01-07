import {combineReducers} from 'redux'
import chat from './chat/Reducer'
import user from './user/Reducer'
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

const userPersistConfig = {
    key: 'auth',
    storage: storage,
    blacklist: ['currentChatUser']
};
const chatPersistConfig = {
    key: 'auth',
    storage: storage,
    blacklist: ['message']
};
const rootPersistConfig = {
    key: 'root',
    storage: storage
};
const RootReducer = combineReducers({
    chat: persistReducer(chatPersistConfig, chat),
    user: persistReducer(userPersistConfig, user)
})
export default persistReducer(rootPersistConfig, RootReducer)