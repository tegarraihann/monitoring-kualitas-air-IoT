function updateValues(temp, salinity, turbidity) {
    document.getElementById('tempValue').innerText = temp + " °C";
    document.getElementById('salinityValue').innerText = salinity + " ppt";
    document.getElementById('turbidityValue').innerText = turbidity + " NTU";

    // Tambahkan logika peringatan
    if (temp > 40 || salinity > 35 || turbidity > 100) {
        const alertMessage = `Nilai abnormal terdeteksi: Suhu ${temp}°C, Salinitas ${salinity}ppt, Kekeruhan ${turbidity}NTU.`;
        document.getElementById('alertMessage').innerText = alertMessage;
        document.getElementById('alertModal').style.display = "flex";
    }
}

// function closeModal() {
//     document.getElementById('alertModal').style.display = "none";
// }

function fetchData() {
    fetch('assets/php/get_data.php')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.error) {
                console.error(data.error);
                return;
            }
            updateValues(data.suhu, data.tds, data.kekeruhan);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

setInterval(fetchData, 3000);
