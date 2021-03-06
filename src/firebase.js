import firebase from "firebase"
import "firebase/auth";
import "firebase/firebase-firestore";


const config = {
    apiKey: "AIzaSyAalR16XKuz2V4bb7rw_q4Wvi1GwHI2RdM",
    authDomain: "counter-f3477.firebaseapp.com",
    databaseURL: "https://counter-f3477.firebaseio.com",
    projectId: "counter-f3477",
    storageBucket: "counter-f3477.appspot.com",
    messagingSenderId: "1061057964679",
    appId: "1:1061057964679:web:fbeac9d75e814660706622",
    measurementId: "G-SEVGD0NKJ3"
  };

  
  class Firebase {
    constructor() {
      firebase.initializeApp(config);
      this.auth = firebase.auth();
      this.db = firebase.firestore();
    }
  
    login(email, password) {
      return this.auth.signInWithEmailAndPassword(email, password);
    }
  
    logout() {
      return this.auth.signOut();
    }
  
    async register(name, email, password) {
      await this.auth.createUserWithEmailAndPassword(email, password);
      return this.auth.currentUser.updateProfile({
              displayName: name,
      });
    }
  
    isInitialized() {
      return new Promise(resolve => {
        this.auth.onAuthStateChanged(resolve);
      });
    }
  
    getCurrentUsername() {
      return this.auth.currentUser && this.auth.currentUser.displayName;
    }
  }
  
  export default new Firebase();