import * as types from "./ActionTypes";
import firebaseService from "../../services/FirebaseService";
const FIREBASE_REF_USERS = firebaseService.database().ref('Users')

export const saveLocalContacts = contacts => {
    return (dispatch) => {
        dispatch(saveContactsInStore(contacts))
    }
}


const saveContactsInStore = contacts => ({
    type: types.SAVE_LOCAL_CONTACTS_IN_STORE,
    contacts
})
