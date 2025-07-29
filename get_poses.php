<?php
include 'db_config.php';
header('Content-Type: application/json');
$sql = "SELECT id, motor1, motor2, motor3, motor4, motor5, motor6 FROM poses ORDER BY created_at DESC";
$result = $conn->query($sql);
$poses = [];
if ($result->num_rows > 0) {
while($row = $result->fetch_assoc()) {
$poses[] = $row;
}
}
echo json_encode($poses);
$conn->close();
?>
