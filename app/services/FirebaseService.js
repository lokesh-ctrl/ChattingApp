import * as firebase from 'firebase';
import firebaseConfiguration from '../configs/FirebaseConfiguraion';

try {
    firebase.initializeApp(firebaseConfiguration);
} catch (e) {
    if (!/already exists/.test(e.message))
        console.log("firebase intialization error " + e.stackTrace);
}
const firebaseService = firebase;
export default firebaseService;