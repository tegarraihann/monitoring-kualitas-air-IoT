<?php
include("config.php");

$sql = "SELECT id, DATE_FORMAT(tanggal, '%Y-%m-%d') AS waktu, suhu, tds AS salinitas, kekeruhan FROM monitoring ORDER BY id DESC";
$query = mysqli_query($db, $sql);

$data = [];
while ($row = mysqli_fetch_assoc($query)) {
    $data[] = $row;
}

// Return data dalam format JSON
echo json_encode([
    "data" => $data
]);
?>
