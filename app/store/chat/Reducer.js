import * as types from './ActionTypes'

const initialState = {
    sending: false,
    message: '',
    messages: {},
    loadMessagesError: null
}

const chat = (state = initialState, action) => {
    switch (action.type) {
        case types.SENT_MESSAGE_SENDING:
            return {...state, sending: true}
        case types.SENT_MESSAGE_SUCCESS:
            return {...state, sending: false, message: ''}
        case types.SENT_MESSAGE_UPDATE:
            return{...state,sending:false,message:action.text}
        case types.CHAT_LOAD_MESSAGES_SUCCESS:
            return {...state, messages: action.messages, loadMessagesError: null}
        case types.CHAT_LOAD_MESSAGES_ERROR:
            return {...state, messages: null, loadMessagesError: action.error}
        default:
            return state
    }
}

export default chat