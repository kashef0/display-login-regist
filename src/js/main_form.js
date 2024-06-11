"use strict";

import { deleteData } from './del_data.js';
import { visaData } from './visa_data.js';
import { logOut_code } from './logOut.js';
import { toggleMenu } from './navMenu.js';
import { showProtectedContent, showProtectedContent1 } from './protected.js';
const url = "https://backend-baserad-webbutveckling-2.onrender.com/api/workexperience";


document.addEventListener('DOMContentLoaded', async function () {
    showProtectedContent1();
    showProtectedContent();
    // Funktion för att hämta befintliga data när sidan laddas
    const token = localStorage.getItem('token');
    if (!token) {
        console.error("No token found");
        return;
    }
    // Funktion för att hämta befintliga data när sidan laddas
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Access denied');
        }
        const data = await response.json();
        const dataShow = document.getElementById("created_list");
        if (dataShow) {
            visaData(data.rows);
        } else {
            console.error("Element with id 'created_list' not found.");
        }

        document.querySelectorAll(".del_BTN").forEach(button => {
            button.addEventListener('click', deleteData);
        });
    } catch (error) {
        console.error("Error vid hämtning av data:", error);
    }
});


logOut_code();

toggleMenu();