import * as types from "./ActionTypes";
import firebaseService from "../../services/FirebaseService";

const FIREBASE_REF_USERS = firebaseService.database().ref('Users')

export const saveLocalContacts = contacts => {
    return (dispatch) => {
        dispatch(saveContactsInStore(contacts))
    }
};
export const registerUser = userInformation => {
    return (dispatch) => {
        let userInfo = {
            phoneNumber: userInformation.phoneNumber,
            deviceId: userInformation.deviceId
        };
        FIREBASE_REF_USERS.once("value", function (data) {
            console.log(data);
            FIREBASE_REF_USERS.push(userInfo, (error) => {
                if (error) {
                    console.log("Error registering")
                } else {
                    console.log("Registered successfully")
                }
            });
        })
        dispatch(saveUserInfoInStore(userInfo))
    }
};
export const loadRegisteredContactsInFirebase = () => {
    return (dispatch) => {
        FIREBASE_REF_USERS.on('value', (snapshot) => {
            let contacts = [];
            snapshot.forEach(function (childSnapshot) {
                let contact = childSnapshot.val();
                contact['.key'] = childSnapshot.key;
                contacts.push(contact)
            });
            dispatch(loadContactsSuccess(contacts))
        }, (error) => {
            dispatch(loadContactsFailure(error.message))
        })
    }
};
export const chatWithThisUser = contact => {
    return (dispatch) => {
        let chatUserPhoneNumber = '' + contact.phoneNumbers[0].number;
        let trimmedPhoneNumber = chatUserPhoneNumber.replace(/[^a-zA-Z0-9]/g, '');
        let chatContact = {
            phoneNumber: trimmedPhoneNumber,
            name: contact.givenName
        }
        console.log(chatContact)
        dispatch(saveCurrentChatUserInStore(chatContact))
    }
};
export const switchToHomePage = () => {
    return (dispatch) => {
        dispatch(switchToHomePageFromChatPage())
    }
};
const switchToHomePageFromChatPage = () => ({
    type: types.REMOVE_CURRENT_CHAT_CONTACT
});
const saveCurrentChatUserInStore = contact => ({
    type: types.SAVE_CURRENT_CHAT_CONTACT,
    contact
});
const loadContactsSuccess = contacts => ({
    type: types.LOAD_CONTACTS_FROM_FIREBASE_SUCCESS,
    contacts
});
const loadContactsFailure = message => ({
    type: types.LOAD_CONTACTS_FROM_FIREBASE_FAILED,
    message
});
const saveUserInfoInStore = userInformation => ({
    type: types.SAVE_USER_INFO_IN_STORE,
    userInformation
});
const saveContactsInStore = contacts => ({
    type: types.SAVE_LOCAL_CONTACTS_IN_STORE,
    contacts
});
