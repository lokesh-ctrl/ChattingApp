import React from 'react'
import {Provider} from 'react-redux'
import {configureStore} from './app/store/Store'
import RootReducer from './app/store/RootReducer'
import ChatAppComponent from './app/components/ChatApp/ChatAppComponent'

const store = configureStore(RootReducer)

const App = () => (
    <Provider store={store}>
        <ChatAppComponent/>
    </Provider>)

export default App
