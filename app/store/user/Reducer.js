import * as types from './ActionTypes'

const initialState = {
    localContacts: [],
    user: null,
    isRegistered: false,
    firebaseContacts: null,
    errorLoadingContacts: false
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case types.SAVE_LOCAL_CONTACTS_IN_STORE:
            return {...state, localContacts: action.contacts}
        case types.SAVE_USER_INFO_IN_STORE:
            return {...state, user: action.userInformation, isRegistered: true}
        case types.LOAD_CONTACTS_FROM_FIREBASE_SUCCESS:
            return {...state, firebaseContacts: action.contacts}
        case types.LOAD_CONTACTS_FROM_FIREBASE_FAILED:
            return {...state, errorLoadingContacts: true}
        default:
            return state
    }
}

export default user