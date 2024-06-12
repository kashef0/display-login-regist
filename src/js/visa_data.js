// Funktion för att visa befintliga data på webbsidan

const dataShow = document.getElementById("created_list");
const url = "https://kmoment04-backend.onrender.com/api/company";

async function fetchDataShow() {
    const dataLoading = document.getElementById("skyddad");
    dataLoading.style.display = "block";
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        visaData(data);
        // visaDataAdmin(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        dataLoading.style.display = "none";
    }
}

function visaData(rows) {
    if (!rows || !Array.isArray(rows)) {
        console.error("Invalid data or no data provided.");
        return;
    }
    dataShow.innerHTML = ""; 
    document.getElementById("loadingMessage").style.display = "block";
    rows.forEach(element => {
        const rowId = element._id;
        dataShow.innerHTML += `
        <ul class="unorderList" id="row-${element._id}">
            <span>
            <li>Företagsnamn: ${element.company_name}</li>
            <li>Jobbtitel: ${element.job_title}</li>
            <li>Plats: ${element.location}</li>
            <li>Startdatum: ${new Date(element.start_date).toLocaleDateString()}</li>
            <li>Slutdatum: ${new Date(element.end_date).toLocaleDateString()}</li>
            <li>Beskrivning: ${element.description}</li>
            </span>
            <input type="button" class="del_BTN" data-row-id="${rowId}" id="row-${element._id}" value="Radera"> 
        </ul>
        <br>
        `;
    });

    document.getElementById("loadingMessage").style.display = "none";
}

fetchDataShow();
export { visaData };