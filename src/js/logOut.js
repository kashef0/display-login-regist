"use strict";


 

const logOut = document.getElementById('logoutBtn');
logOut.addEventListener('click', logOut_code);

export function logOut_code() {
    event.preventDefault();
    // Clear token from local storage
    localStorage.removeItem('token');
    // Redirect user to login page
    window.location.href = "/index.html";
};


