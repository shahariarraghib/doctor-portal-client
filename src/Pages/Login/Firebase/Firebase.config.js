const firebaseConfig = {

    // apiKey: "AIzaSyDV4ZV4t1ch6e6RLqgBeRYrNgzkag3DV8U",
    // authDomain: "doctor-portal-client-844f5.firebaseapp.com",
    // projectId: "doctor-portal-client-844f5",
    // storageBucket: "doctor-portal-client-844f5.appspot.com",
    // messagingSenderId: "429359863000",
    // appId: "1:429359863000:web:aecd02218e5e986298f3ad"

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,


};
export default firebaseConfig;