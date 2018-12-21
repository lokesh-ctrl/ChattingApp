import * as types from './ActionTypes'
import firebaseService from '../../services/FirebaseService'

const FIREBASE_REF_MESSAGES = firebaseService.database().ref('Messages')

export const sendMessage = message => {
    return (dispatch) => {
        console.log("in send message")
        let createdAt = new Date().getTime()
        let chatMessage = {
            text: message,
            createdAt: createdAt,
        }

        FIREBASE_REF_MESSAGES.push(chatMessage, (error) => {
            if (!error) {
                dispatch(chatMessageSuccess())
            }
            else{
                console.log(error)
            }
        })
    }
}


export const updateMessage = text => {
    return (dispatch) => {
        dispatch(chatUpdateMessage(text))
    }
}

const chatUpdateMessage = text => ({
    type: types.SENT_MESSAGE_UPDATE,
    text
})


const chatMessageSuccess = () => ({
    type: types.SENT_MESSAGE_SUCCESS
})