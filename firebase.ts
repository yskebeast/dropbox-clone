import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyI9kMLnaHCzZU5SE3ebSZd1DXsp5Vfnk",
  authDomain: "dropbox-clone-70e4e.firebaseapp.com",
  projectId: "dropbox-clone-70e4e",
  storageBucket: "dropbox-clone-70e4e.appspot.com",
  messagingSenderId: "269970748901",
  appId: "1:269970748901:web:3b21c639e00e9a68e0eb0c",
  measurementId: "G-S59VKG52LV",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
