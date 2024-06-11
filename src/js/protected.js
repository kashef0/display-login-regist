"use strict";
const API_URL = "https://backend-baserad-webbutveckling-17.onrender.com/api";
const PROTECTED_URL = `${API_URL}/protected`;
import { addData } from './add_data.js';

// Visa skyddat innehåll om användaren är inloggad
export function showProtectedContent() {
    const messageEL = document.getElementById("skyddad");
    const username = localStorage.getItem('username');
    const testEl = document.getElementById("test");
    const form = document.getElementById('add_data');
   // kontrollera om 
    if (testEl) {
        testEl.innerHTML = `Välkomna :<span style="color:red"> ${username}</span>`;
    } else {
        console.error("Element med id 'test' finns inte");
    }
    

    const token = localStorage.getItem('token');
    if (token && window.location.pathname !== "/home.html") {
        fetch(PROTECTED_URL, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Access denied');
                }
                return response.text();
            })
            .then(data => {
                if (form) {
                    form.addEventListener('submit', addData);
                } else {
                    console.error("Form element med id 'add_data' inte hittades.");
                }
                // window.location.href = "/home.html";
                messageEL.style.display = "block";
                return;
            })
            .catch(error => {
                console.error('Error accessing protected content:', error.message);
            });
    } else {
        console.error("ingen token hittades");
        return;
    }

}

export function showProtectedContent1() {
    const token = localStorage.getItem('token');
    if(!token) {
        window.location.href = "/index.html";
    }
}

