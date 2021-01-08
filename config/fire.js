import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyApgi-3oJcufy_tejx0Q5KoqszhYL_pChM",
    authDomain: "cart-app-247c4.firebaseapp.com",
    projectId: "cart-app-247c4",
    storageBucket: "cart-app-247c4.appspot.com",
    messagingSenderId: "479347284560",
    appId: "1:479347284560:web:643c2ca3b7876571514f55"
  };

  const fire = firebase.initializeApp(firebaseConfig);
   const db = fire.firestore();
  export const auth = firebase.auth();
  export {db};
  export default fire;
  