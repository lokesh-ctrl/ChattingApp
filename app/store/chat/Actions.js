import * as types from './ActionTypes'
import firebaseService from '../../services/FirebaseService'
import {applyMiddleware as dispatch} from "redux";

const FIREBASE_DATABASE = firebaseService.database();

export const sendMessage = (messageBody, senderNumber, receiverNumber) => {
    return (dispatch) => {
        let createdAt = new Date().getTime()
        let chatMessageForSender = {
            text: messageBody,
            createdAt: createdAt,
            sender: senderNumber,
            receiver: receiverNumber,
            id: 1,
        };
        let chatMessageForReceiver = {
            text: messageBody,
            createdAt: createdAt,
            sender: senderNumber,
            receiver: receiverNumber,
            id: 2
        };
        let senderReference = 'Users/' + senderNumber + '/' + 'Conversations/' + receiverNumber;
        FIREBASE_DATABASE.ref(senderReference).push(chatMessageForSender, (error) => {
            if (!error) {
                // console.log("message sent successfully")
                dispatch(chatMessageSuccess())
            } else {
                console.log(error)
            }
        })
        let receiverReference = 'Users/' + senderNumber + '/' + 'Conversations/' + receiverNumber;
        FIREBASE_DATABASE.ref(receiverReference).push(chatMessageForReceiver, (error) => {
            if (!error) {
                // console.log("message sent successfully")
                dispatch(chatMessageSuccess())
            } else {
                console.log(error)
            }
        })
    }
};
export const loadMessagesRelatedToChatUser = (userNumber, chatUserNumber) => {
    let messages = [];
    let conversationKey = 'Users/' + userNumber + '/' + 'Conversations/' + chatUserNumber;
    FIREBASE_DATABASE.ref(conversationKey).on('value', function (data) {
        console.log(data);
        data.forEach(function (child) {
            let message = child.val()
            messages.push(message)
        })
    })
    dispatch(saveMessagesRelatedToUserInStore(messages))
};
const saveMessagesRelatedToUserInStore = messages => {
    type: types.SAVE_MESSAGES_IN_STORE;
    messages
};
export const updateMessage = text => {
    return (dispatch) => {
        dispatch(chatUpdateMessage(text))
    }
};
const chatUpdateMessage = text => ({
    type: types.SENT_MESSAGE_UPDATE,
    text
});
const chatMessageSuccess = () => ({
    type: types.SENT_MESSAGE_SUCCESS
});