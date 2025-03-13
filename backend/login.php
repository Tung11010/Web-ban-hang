<?php
include 'db.php';

// Lấy dữ liệu từ request
$data = json_decode(file_get_contents("php://input"), true);

// Debug: Kiểm tra request nhận được từ frontend
file_put_contents("debug_login.txt", print_r($data, true));

if (!$data || !isset($data['email']) || !isset($data['password'])) {
    echo json_encode(['success' => false, 'message' => 'Invalid request data.']);
    exit;
}

$email = $data['email'];
$password = $data['password'];

$sql = "SELECT id, username, email, password FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

$response = [];

if ($user) {
    if (password_verify($password, $user['password'])) {
        $response['success'] = true;
        $response['user'] = [
            'id' => $user['id'],
            'username' => $user['username'],
            'email' => $user['email']
        ];
    } else {
        $response['success'] = false;
        $response['message'] = "Invalid password.";
    }
} else {
    $response['success'] = false;
    $response['message'] = "Email not found.";
}

$stmt->close();
$conn->close();

header('Content-Type: application/json');
echo json_encode($response);
?>
