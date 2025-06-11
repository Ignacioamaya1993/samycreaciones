import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
apiKey: "AIzaSyCzxD_-xGBr8s3AyaYhknd6Fzg5_jszIpQ",
authDomain: "samy-creaciones.firebaseapp.com",
projectId: "samy-creaciones",
storageBucket: "samy-creaciones.firebasestorage.app",
messagingSenderId: "446684845741",
appId: "1:446684845741:web:745a34c81c25a89f1fd824",
measurementId: "G-QH5L933RPY"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };