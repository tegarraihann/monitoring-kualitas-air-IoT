<?php
// ini untuk save
include("config.php");

// cek apakah tombol daftar sudah diklik atau blum?
if(isset($_GET['tds']) && isset($_GET['suhu']) && isset($_GET['turbidity'])){

    // ambil data dari formulir
    
    $a = $_GET['tds'];
    $as = $_GET['suhu'];
    $def = $_GET['turbidity'];
    // echo $nama;

    // buat query
    $sql = "INSERT INTO monitoring (tds, suhu, kekeruhan) VALUES ($a, $as, $def)";
    $query = mysqli_query($db, $sql);

}

?>