<?php
include 'db_config.php';

header('Content-Type: application/json');
$sql = "SELECT id, motor1, motor2, motor3, motor4, motor5, motor6 FROM poses WHERE status = 1 ORDER BY created_at ASC LIMIT 1";
$result = $conn->query($sql);

$poseToRun = null;
if ($result->num_rows > 0) {
$poseToRun = $result->fetch_assoc();
}
echo json_encode($poseToRun); 

$conn->close();
?>
