$(document).ready(function () {
    $('#updatedData').DataTable({
        ajax: 'assets/php/get_updated_data.php', // Endpoint PHP untuk mendapatkan data JSON
        columns: [
            { data: 'id', width: "10%"}, // Nomor
            { data: 'suhu', width: "10%" }, // Suhu
            { data: 'salinitas', width: "10%" }, // Salinitas
            { data: 'kekeruhan', width: "10%" }, // Kekeruhan
            { data: 'waktu', width: "20%" }, // Waktu
        ],
        responsive: true,
        language: {
            url: "assets/i18n/id.json", // Lokalize ke Bahasa Indonesia
        },
        lengthMenu: [5, 10, 25, 50, 100], // Jumlah entries per page
        pagingType: "full_numbers", // Pagination dengan nomor
    });
});
