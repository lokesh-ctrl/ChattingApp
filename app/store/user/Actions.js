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
    return(dispatch)=>{
        let userInfo = {
            phoneNumber: userInformation.phoneNumber,
            deviceId:userInformation.deviceId
        }
        FIREBASE_REF_USERS.push(userInfo,(error)=>{
            if (!error){
                console.log("Error registering")
            }
            else {
                console.log("Registered successfully")
                dispatch(saveUserInfoInStore(userInfo))
            }
        })
    }
}

const saveUserInfoInStore = userInformation => ({
    type: types.SAVE_USER_INFO_IN_STORE,
        userInformation
})

const saveContactsInStore = contacts => ({
    type: types.SAVE_LOCAL_CONTACTS_IN_STORE,
    contacts
})
