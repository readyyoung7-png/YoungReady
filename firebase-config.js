import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyAMFOM3Ebiah3EvVHNpcUUDmCJrv8WAM8c",
    authDomain: "youngready-6efa1.firebaseapp.com",
    projectId: "youngready-6efa1",
    storageBucket: "youngready-6efa1.firebasestorage.app",
    messagingSenderId: "839352328601",
    appId: "1:839352328601:web:3dded944899b287a91b308"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


export { app, auth, db };
