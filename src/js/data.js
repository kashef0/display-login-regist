"use strict";

const API_URL = "https://backend-baserad-webbutveckling-16.onrender.com/api";
const LOGIN_URL = `${API_URL}/login`;
const REGISTER_URL = `${API_URL}/signup`;
const PROTECTED_URL = `${API_URL}/api/protected`;

// Registrera användare
document.getElementById('register-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('name').value;
    const email = document.getElementById('e-mail').value;
    const password = document.getElementById('passwords').value;

    try {
        const response = await fetch(REGISTER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });
        if (!response.ok) {
            throw new Error('Registration failed');
        }

        window.location.href = "/pages/login.html";
        alert('Registrering lyckades! Logga in för att fortsätta.');

    } catch (error) {
        console.error('Error during registration:', error.message);
    }

});

// Logga in användare
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('login-password').value;
    let test = document.getElementById("test");
    try {
        const response = await fetch(LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        if (!response.ok) {
            test.innerHTML = `<p>'Login failed: ' + ${response}</p>`;
            throw new Error('Login failed');
        }
        const data = await response.json();

        localStorage.setItem('token', data.token);
        showProtectedContent();
        window.location.href = "/index.html";
    } catch (error) {

        console.error('Error during login:', error.message);
    }

});





// Visa skyddat innehåll om användaren är inloggad
function showProtectedContent() {
    const token = localStorage.getItem('token');
    if (token) {
        fetch(PROTECTED_URL, {
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
                document.getElementById('protected-content').style.display = 'block';
            })
            .catch(error => {
                console.error('Error accessing protected content:', error.message);
            });
    }
}



// Kolla om användaren är inloggad när sidan laddas
window.addEventListener('load', showProtectedContent);
