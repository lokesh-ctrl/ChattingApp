import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './app/store/Store'
import RootReducer from './app/store/RootReducer'
import ChatAppContainer from './app/components/ChatApp/ChatAppContainer'


const store = configureStore(RootReducer)
if(process.env.NODE_ENV !== 'production') {
    window.myStore = store
}

const App = () => (
    <Provider store={store}>
        {store.subscribe(()=>{
            console.log("state is"+store.getState() )
        })}
        <ChatAppContainer/>
    </Provider>)

export default App
