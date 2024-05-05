"use strict";

let openBtnLogin = document.getElementById("bli-medlem");
let closeBtnLogin = document.getElementById("loginKlick");


openBtnLogin.addEventListener('click', formSwitcher);
closeBtnLogin.addEventListener('click', formSwitcher);


export function formSwitcher() {
    let registEl = document.getElementById("registrationForm");
    let loginEL = document.getElementById("loginForm");

    let style = window.getComputedStyle(registEl);

    if (style.display === "none") {
        registEl.style.display = "block";
        loginEL.style.display = "none";
    } else {
        registEl.style.display = "none";
        loginEL.style.display = "block";
    }
}
