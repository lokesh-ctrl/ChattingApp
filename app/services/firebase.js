import * as firebase from 'firebase';
import firebaseConfig from '../configs/firebase';

try {
    firebase.initializeApp(firebaseConfig);
} catch (e) {
    if (!/already exists/.test(e.message))
        console.log("firebase intialization error " + e.stackTrace);
}
const firebaseService = firebase;
export default firebaseService;