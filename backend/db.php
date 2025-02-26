<?php
$host = "localhost";
$user = "root";  // Thay đổi nếu cần
$password = "root";  // Thay đổi nếu cần
$database = "user_management";

$conn = new mysqli($host, $user, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
