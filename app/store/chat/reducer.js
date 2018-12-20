import * as types from './actionTypes'

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
        default:
            return state
    }
}

export default chat