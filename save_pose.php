<?php
include 'db_config.php';
header('Content-Type: application/json');
$input = json_decode(file_get_contents('php://input'), true);

$motor1 = $input['motor1'] ?? null;
$motor2 = $input['motor2'] ?? null;
$motor3 = $input['motor3'] ?? null;
$motor4 = $input['motor4'] ?? null;
$motor5 = $input['motor5'] ?? null;
$motor6 = $input['motor6'] ?? null;
$status = $input['status'] ?? 0; 

if (is_null($motor1) || is_null($motor2) || is_null($motor3) || is_null($motor4) || is_null($motor5) || is_null($motor6)) {
echo json_encode(['success' => false, 'message' => 'null.']);
$conn->close();
exit();
}
$stmt = $conn->prepare("INSERT INTO poses (motor1, motor2, motor3, motor4, motor5, motor6, status) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("iiiiiii", $motor1, $motor2, $motor3, $motor4, $motor5, $motor6, $status);

if ($stmt->execute()) {
echo json_encode(['success' => true, 'message' => 'successful.']);
} else {
echo json_encode(['success' => false, 'message' => 'error: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
