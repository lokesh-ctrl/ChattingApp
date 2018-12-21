import * as types from './ActionTypes'

const initialState = {
    sending: false,
    message: '',
    messages: {}
}

const chat = (state = initialState, action) => {
    switch (action.type) {
        case types.SENT_MESSAGE_SENDING:
            return {...state, sending: true}
        case types.SENT_MESSAGE_SUCCESS:
            return {...state, sending: false, message: ''}
        case types.SENT_MESSAGE_UPDATE:
            return{...state,sending:false,message:action.text}
        default:
            return state
    }
}

export default chat