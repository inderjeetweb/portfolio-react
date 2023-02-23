import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey:  '${{ secrets.APPID }}',
    authDomain: "inderjeet-profile.firebaseapp.com",
    projectId: "inderjeet-profile",
    storageBucket: "inderjeet-profile.appspot.com",
    messagingSenderId:  '${{ secrets.MESSAGINGSENDERID }}',
    appId:  '${{ secrets.APPID }}',
    measurementId: '${{ secrets.MEASUREMENTID }}'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
