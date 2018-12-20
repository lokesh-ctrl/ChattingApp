import React from 'react'
import {Provider} from 'react-redux'
import {configureStore} from './app/store'
import {Text, View} from 'react-native'
import RootReducer from './app/store/reducer'

const store = configureStore(RootReducer)

const App = () => (
    <Provider store={store}>
        <View>
            {console.log(store.getState())}
            <Text>Hello</Text>
        </View>
    </Provider>)

export default App
