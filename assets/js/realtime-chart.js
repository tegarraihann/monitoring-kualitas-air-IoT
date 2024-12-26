document.addEventListener("DOMContentLoaded", function () {
    var options = {
        chart: {
            type: "line",
            height: 400,
            animations: {
                enabled: true,
                easing: "linear",
                dynamicAnimation: {
                    speed: 1000
                }
            },
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: "smooth",
            width: 2
        },
        series: [
            { name: "Suhu", data: [], color: "#FF5733" },
            { name: "Salinitas", data: [], color: "#33FF57" },
            { name: "Kekeruhan", data: [], color: "#3357FF" }
        ],
        xaxis: {
            type: "datetime",
            labels: {
                datetimeFormatter: { year: 'yyyy', month: 'MMM yyyy', day: 'dd MMM', hour: 'HH:mm:ss' },
                style: { colors: "#666", fontSize: "12px" }
            }
        },
        yaxis: {
            labels: { style: { colors: "#666", fontSize: "12px" } }
        },
        legend: {
            position: "top",
            horizontalAlign: "center"
        }
    };

    var chart = new ApexCharts(document.querySelector("#realtime-chart"), options);
    chart.render();

    function updateChart() {
        fetch("assets/php/get_realtime_data.php")
            .then(response => response.json())
            .then(data => {
                chart.updateSeries([
                    { name: "Suhu", data: data.suhu },
                    { name: "Salinitas", data: data.salinitas },
                    { name: "Kekeruhan", data: data.kekeruhan }
                ]);
            })
            .catch(error => console.error("Error fetching data:", error));
    }

    updateChart(); // Initial load
    setInterval(updateChart, 5000); // Update every 5 seconds
});
