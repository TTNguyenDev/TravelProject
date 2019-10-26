import app from 'firebase/app';
import 'firebase/auth';

const dev_config = {
    apiKey: "AIzaSyBcAbXks9g56MMbtsEihjtO8fTO6Ce8RtY",
    authDomain: "travelproject-4ce6a.firebaseapp.com",
    databaseURL: "https://travelproject-4ce6a.firebaseio.com",
    projectId: "travelproject-4ce6a",
    storageBucket: "travelproject-4ce6a.appspot.com",
    messagingSenderId: "309762575125",
    appId: "1:309762575125:web:63052389a98693da72771c",
    measurementId: "G-JN7SH06MW5"
};

//setup later 
// This use for release version

// const prod_config = {
//     apiKey: "AIzaSyBcAbXks9g56MMbtsEihjtO8fTO6Ce8RtY",
//     authDomain: "travelproject-4ce6a.firebaseapp.com",
//     databaseURL: "https://travelproject-4ce6a.firebaseio.com",
//     projectId: "travelproject-4ce6a",
//     storageBucket: "travelproject-4ce6a.appspot.com",
//     messagingSenderId: "309762575125",
// };

class Firebase {
    constructor() {
        app.initializeApp(dev_config);
        this.auth = app.auth();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password)

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;