"use strict";

import { showProtectedContent } from "./protected";


const logOut = document.getElementById('logoutBtn');
logOut.addEventListener('click', logOut_code);

export function logOut_code() {
    event.preventDefault();
    // Clear token from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    // Redirect user to login page
    showProtectedContent();
    window.location.href = "/index.html";
};


