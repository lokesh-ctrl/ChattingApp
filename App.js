import React from 'react'
import {Provider} from 'react-redux'
import RootReducer from './app/store/RootReducer'
import ChatAppContainer from './app/components/ChatApp/ChatAppContainer'
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {PersistGate} from 'redux-persist/lib/integration/react';
import LoadingView from './app/components/LoadingView/LoadingView'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'


const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
}
const pReducer = persistReducer(persistConfig, RootReducer);
const middleware = [thunk]
const store = createStore(pReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);
if (process.env.NODE_ENV !== 'production') {
    window.myStore = store
}

const App = () => (
    <Provider store={store}>
        <PersistGate loading={<LoadingView/>} persistor={persistor}>
            <ChatAppContainer/>
        </PersistGate>
    </Provider>)

export default App