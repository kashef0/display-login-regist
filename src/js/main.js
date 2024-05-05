// import { formSwitcher } from './login.js'; // Importera funktionen från login.js
import { toggleMenu } from './navMenu.js'; // Importera funktionen från navMenu.js
import { handleSubmit } from './data.js'; // Importera funktionen från navMenu.js
require("dotenv").config();


document.addEventListener('DOMContentLoaded', function() {
    // Hämta referenser till knapparna eller andra element
    // let openBtnLogin = document.getElementById("bli-medlem");
    // let closeBtnLogin = document.getElementById("loginKlick");

    let openBtn = document.getElementById("open-menu");
    let closeBtn = document.getElementById("close-menu");

    // Bifoga händelselyssnare och använd funktionerna
    // openBtnLogin.addEventListener('click', formSwitcher);
    // closeBtnLogin.addEventListener('click', formSwitcher);

    openBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    
    document.getElementById('login').addEventListener('submit', handleSubmit);

});

