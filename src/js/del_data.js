
const url = "https://kmoment04-backend.onrender.com/api/company";

// funktion för att radera en rad data
async function deleteData(event) {
    const button = event.target;
    const rowId = button.dataset.rowId;                
    const rowEl = document.getElementById(`row-${rowId}`);
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`${url}/${rowId}`, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error("misslyckades att ta bort rad data med ID: " + rowId);
        }

        
        if (rowEl) {
            rowEl.remove();
        }
        alert("jobbet är raderad..");
    } catch (error) {
        console.error("det går inte att radera data:", error);
    }
}
export { deleteData };