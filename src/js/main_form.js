"use strict";
import { addData } from './add_data.js';
import { deleteData } from './del_data.js';
import { visaData } from './visa_data.js';
import { logOut_code } from './logOut.js';
import { toggleMenu } from './navMenu.js';
const url = "https://backend-baserad-webbutveckling-2.onrender.com/api/workexperience";


document.addEventListener('DOMContentLoaded', async function() {
    const form = document.getElementById('add_data');
    if (form) {
        form.addEventListener('submit', addData);
    } else {
        console.error("Form element with id 'add_data' not found.");
    }

    // Funktion för att hämta befintliga data när sidan laddas
    try {
        const response = await fetch(url, {
            method: "GET"
        });
        const data = await response.json();
        visaData(data.rows);

        document.querySelectorAll(".del_BTN").forEach(button => {
            button.addEventListener('click', deleteData);
        });
    } catch (error) {
        console.error("Error vid hämtning av data:", error);
    }
});


logOut_code();

toggleMenu();