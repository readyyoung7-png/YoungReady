import { auth } from "./firebase-config.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// COMPTE ADMINISTRATEUR AUTORISÉ
const ADMIN_EMAIL = "readyyoung7@gmail.com";


onAuthStateChanged(auth, (user) => {

    // Aucun utilisateur connecté
    if (!user) {
        window.location.href = "connexion.html";
        return;
    }


    // Utilisateur connecté mais pas administrateur
    if (user.email !== ADMIN_EMAIL) {

        alert("Accès réservé à l'administrateur.");

        window.location.href = "connexion.html";

        return;
    }


    // Administrateur autorisé
    console.log("Administrateur authentifié :", user.email);

});
