<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

$username = $data['username'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_DEFAULT);

$sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $username, $email, $password);

$response = [];
if ($stmt->execute()) {
    $response['success'] = true;
    $response['message'] = "User registered successfully!";
} else {
    $response['success'] = false;
    $response['message'] = "Error: " . $conn->error;
}

$stmt->close();
$conn->close();
echo json_encode($response);
?>
