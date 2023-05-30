import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBgp38otcXGGGK0N07MvbDlCt0k7378gMY",
  authDomain: "soko-11.firebaseapp.com",
  projectId: "soko-11",
  storageBucket: "soko-11.appspot.com",
  messagingSenderId: "288176902153",
  appId: "1:288176902153:web:285247195da69049be68d8",
  measurementId: "G-VYPTPXGLQJ",
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, storage, db };
// const analytics = getAnalytics(app);
