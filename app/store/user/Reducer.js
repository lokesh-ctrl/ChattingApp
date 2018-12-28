import * as types from './ActionTypes'

const initialState = {
    localContacts:[],
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_LOCAL_CONTACTS_IN_STORE:
            return {...state, localContacts: action.contacts}
        default:
            return state
    }
}

export default user