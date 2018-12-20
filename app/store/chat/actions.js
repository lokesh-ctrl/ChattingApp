import * as types from './actionTypes'
import firebaseService from '../../services/firebase'

const FIREBASE_REF_MESSAGES = firebaseService.database().ref('Messages')

export const sendMessage = message => {
    return (dispatch) => {
        let createdAt = new Date().getTime()
        let chatMessage = {
            text: message,
            createdAt: createdAt,
        }

        FIREBASE_REF_MESSAGES.push().set(chatMessage, (error) => {
            if (!error) {
                dispatch(chatMessageSuccess())
            }
        })
    }
}

const chatMessageSuccess = () => ({
    type: types.SENT_MESSAGE_SUCCESS
})