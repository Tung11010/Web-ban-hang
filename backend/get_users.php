<?php
include 'db.php';

// SQL truy vấn
$sql = "SELECT id, username, email FROM users";
$result = $conn->query($sql);

$users = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
}

// Đóng kết nối
$conn->close();

// Trả về JSON kết quả
header('Content-Type: application/json');
echo json_encode($users);
?>
