"use strict";
const API_URL = "https://backend-baserad-webbutveckling-17.onrender.com/api";
const PROTECTED_URL = `${API_URL}/protected`;

// Visa skyddat innehåll om användaren är inloggad
export function showProtectedContent() {
    const username = localStorage.getItem('username');
    if (username) {
        // Use the username as needed
        document.getElementById("test").innerHTML = `Welcome, ${username}!`;
    }
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
                // window.location.href = "/src/index.html";
                return response.text();
            })
            .then(data => {
                document.getElementById("test").innerHTML = `Välkomna :<span style="color:red"> ${username}</span>`;
                
                // document.getElementById('protected-content').style.display = 'block';
                // window.location.href = "/src/index.html"
            })
            .catch(error => {
                console.error('Error accessing protected content:', error.message);
            });
    }
}


window.addEventListener('load', showProtectedContent);

