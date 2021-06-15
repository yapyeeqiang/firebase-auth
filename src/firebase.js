import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyA3GouaQYxdwVIAUepeZ-SzwiGaM59mnQ8",
	authDomain: "react-firebase-auth-7fe2c.firebaseapp.com",
	projectId: "react-firebase-auth-7fe2c",
	storageBucket: "react-firebase-auth-7fe2c.appspot.com",
	messagingSenderId: "208955972434",
	appId: "1:208955972434:web:a18cdcd403b0e13f95b88b",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export { auth };
