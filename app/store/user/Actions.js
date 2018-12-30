import * as types from "./ActionTypes";
import firebaseService from "../../services/FirebaseService";

const FIREBASE_REF_USERS = firebaseService.database().ref('Users')

export const saveLocalContacts = contacts => {
    console.log("save local contacts was triggered")
    return (dispatch) => {
        dispatch(saveContactsInStore(contacts))
    }
}

export const registerUser = userInformation => {
    return (dispatch) => {
        let userInfo = {
            phoneNumber: userInformation.phoneNumber,
            deviceId: userInformation.deviceId
        }
        FIREBASE_REF_USERS.once("value", function (data) {
            if (data == null) {
                FIREBASE_REF_USERS.push(userInfo, (error) => {
                    if (!error) {
                        console.log("Error registering")
                    } else {
                        console.log("Registered successfully")
                    }
                })
            }
            dispatch(saveUserInfoInStore(userInfo))
        })
    }
}
export const loadRegisteredContactsInFirebase = () => {
    return (dispatch) => {
        FIREBASE_REF_USERS.on('value', (snapshot) => {
            dispatch(loadContactsSuccess(snapshot.val()))
        }, (error) => {
            dispatch(loadContactsFailure(error.message))
        })
    }
}

const loadContactsSuccess = contacts => ({
    type: types.LOAD_CONTACTS_FROM_FIREBASE_SUCCESS,
    contacts
})
const loadContactsFailure = message => ({
    type: types.LOAD_CONTACTS_FROM_FIREBASE_FAILED,
    message
})
const saveUserInfoInStore = userInformation => ({
    type: types.SAVE_USER_INFO_IN_STORE,
    userInformation
})

const saveContactsInStore = contacts => ({
    type: types.SAVE_LOCAL_CONTACTS_IN_STORE,
    contacts
})
