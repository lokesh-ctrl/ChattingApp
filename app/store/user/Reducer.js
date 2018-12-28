import * as types from './ActionTypes'

const initialState = {
    localContacts:[],
    info:{}
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_LOCAL_CONTACTS_IN_STORE:
            return {...state, localContacts: action.contacts}
        case types.SAVE_USER_INFO_IN_STORE:
            return {...state,info: action.userInformation}
        default:
            return state
    }
}

export default user