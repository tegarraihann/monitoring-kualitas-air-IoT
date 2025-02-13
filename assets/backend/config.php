<?php
$server = "localhost";
$user = "root";
$password = "";
$nama_database = "akuarium";

$db = mysqli_connect($server, $user, $password, $nama_database);

if (!$db) {
    die(json_encode(["error" => "Gagal terhubung dengan database: " . mysqli_connect_error()]));
}
?>
