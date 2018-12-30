import * as types from './ActionTypes'
import firebaseService from '../../services/FirebaseService'

const FIREBASE_DATABASE = firebaseService.database()

export const sendMessage = (messageBody, senderNumber, receiverNumber) => {
    return (dispatch) => {
        let createdAt = new Date().getTime()
        let chatMessage = {
            text: messageBody,
            createdAt: createdAt,
        }
        let conversationKey = '';
        if (senderNumber > receiverNumber) {
            conversationKey = 'Conversations/' + receiverNumber + senderNumber;
        }
        let FIREBASE_CURRENT_CONVERSATION_REFERENCE = FIREBASE_DATABASE.ref(conversationKey)
        FIREBASE_CURRENT_CONVERSATION_REFERENCE.push(chatMessage, (error) => {
            if (!error) {
                dispatch(chatMessageSuccess())
            } else {
                console.log(error)
            }
        })
    }
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