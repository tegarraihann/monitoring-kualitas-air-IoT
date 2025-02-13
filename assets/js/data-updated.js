$(document).ready(function () {
    var table = $('#updatedData').DataTable({
        ajax: 'assets/backend/get_updated_data.php',
        columns: [
            { data: 'id', width: "10%" },
            { data: 'suhu', width: "10%" },
            { data: 'salinitas', width: "10%" },
            { data: 'kekeruhan', width: "10%" },
            { data: 'waktu', width: "20%" }
        ],
        responsive: true,
        language: {
            url: "assets/i18n/id.json"
        },
        pagingType: "full_numbers",
        pageLength: 5,
        dom: 'rtip'
    });

    // Dropdown untuk mengontrol jumlah entri yang ditampilkan
    $('#entries').on('change', function () {
        var length = $(this).val();
        table.page.len(length).draw();
    });

    function filterByDate() {
        var startDate = $('#start-date').val();
        var endDate = $('#end-date').val();

        if (!startDate || !endDate) {
            alert("Silakan pilih rentang tanggal terlebih dahulu.");
            return;
        }

        $.ajax({
            url: 'assets/backend/get_updated_data.php',
            type: 'GET',
            dataType: 'json',
            success: function (json) {
                var filteredData = json.data.filter(function (item) {
                    let itemDate = item.waktu;
                    return itemDate >= startDate && itemDate <= endDate;
                });

                if (filteredData.length === 0) {
                    alert("Tidak ada data dalam rentang tanggal yang dipilih.");
                }

                table.clear().rows.add(filteredData).draw();
            },
            error: function (xhr, status, error) {
                console.error("AJAX Error:", status, error);
            }
        });
    }

    $('#filter-button').on('click', function () {
        filterByDate();
    });
});
