//  Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps,FirebaseApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
let app:FirebaseApp;

// Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCbwQ3KcOgeSSVk98-oSSqgbaqSvT_UfEQ",
  authDomain: "crediblemind-exam.firebaseapp.com",
  projectId: "crediblemind-exam",
  storageBucket: "crediblemind-exam.appspot.com",
  messagingSenderId: "856175528326",
  appId: "1:856175528326:web:2fac1e7333a8d9b34a0407",
};
 
 app = initializeApp(firebaseConfig);
// if(getApps().length){
//   app = getApp();
// }
// else{
//   app = initializeApp(firebaseConfig)
// }
export default app;

