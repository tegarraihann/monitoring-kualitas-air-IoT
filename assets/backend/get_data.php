<?php
include("config.php");

$sql = "SELECT suhu, tds, kekeruhan FROM monitoring ORDER BY id DESC LIMIT 1";
$query = mysqli_query($db, $sql);

header('Content-Type: application/json');

if ($query) {
    $data = mysqli_fetch_assoc($query);
    echo json_encode($data);
} else {
    echo json_encode(["error" => "Data tidak ditemukan"]);
}
?>
