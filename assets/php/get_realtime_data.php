<?php
include("config.php");

// Query untuk mendapatkan semua data
$sql = "SELECT UNIX_TIMESTAMP(tanggal) * 1000 AS timestamp, suhu, tds AS salinitas, kekeruhan FROM monitoring ORDER BY tanggal ASC";
$result = mysqli_query($db, $sql);

$data = ["suhu" => [], "salinitas" => [], "kekeruhan" => []];
while ($row = mysqli_fetch_assoc($result)) {
    $data["suhu"][] = ["x" => (float)$row["timestamp"], "y" => (float)$row["suhu"]];
    $data["salinitas"][] = ["x" => (float)$row["timestamp"], "y" => (float)$row["salinitas"]];
    $data["kekeruhan"][] = ["x" => (float)$row["timestamp"], "y" => (float)$row["kekeruhan"]];
}

header('Content-Type: application/json');
echo json_encode($data);
?>
