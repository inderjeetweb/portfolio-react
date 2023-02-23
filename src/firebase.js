
import firebase from 'firebase';
  
const firebaseConfig = {
    // Your Credentials
    apiKey:  '${{ secrets.APPID }}',
    authDomain: "inderjeet-profile.firebaseapp.com",
    projectId: "inderjeet-profile",
    storageBucket: "inderjeet-profile.appspot.com",
    messagingSenderId:  '${{ secrets.MESSAGINGSENDERID }}',
    appId:  '${{ secrets.APPID }}',
    measurementId: '${{ secrets.MEASUREMENTID }}'
};
    
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;