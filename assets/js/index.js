document.addEventListener("DOMContentLoaded", function () {
    function updateValues(temp, salinity, turbidity) {
        // Pastikan elemen ada sebelum mencoba mengaksesnya
        const tempElement = document.getElementById('tempValue');
        const salinityElement = document.getElementById('salinityValue');
        const turbidityElement = document.getElementById('turbidityValue');

        if (tempElement && salinityElement && turbidityElement) {
            tempElement.innerText = temp + " °C";
            salinityElement.innerText = salinity + " PPT";
            turbidityElement.innerText = turbidity + " PPM";
        } else {
            console.error("Salah satu elemen tidak ditemukan di DOM!");
        }
    }

    function fetchData() {
        fetch('assets/backend/get_data.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Data diterima:", data); // Debugging

                if (!data || typeof data.suhu === "undefined" || typeof data.tds === "undefined" || typeof data.kekeruhan === "undefined") {
                    console.error("Format data tidak valid:", data);
                    return;
                }

                updateValues(data.suhu, data.tds, data.kekeruhan);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    fetchData(); // Load data pertama kali
    setInterval(fetchData, 3000); // Update data setiap 3 detik
});
