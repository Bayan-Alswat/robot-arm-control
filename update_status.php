<?php
include 'db_config.php';

header('Content-Type: application/json');
$input = json_decode(file_get_contents('php://input'), true);

$poseId = $input['id'] ?? null;
$newStatus = $input['status'] ?? 0; 

if (is_null($poseId)) {
echo json_encode(['success' => false, 'message' => 'id is null.']);
$conn->close();
exit();
}
if ($newStatus !== 0 && $newStatus !== 2) {
echo json_encode(['success' => false, 'message' => 'invalid.']);
$conn->close();
exit();
}

$stmt = $conn->prepare("UPDATE poses SET status = ? WHERE id = ?");
$stmt->bind_param("ii", $newStatus, $poseId); 
if ($stmt->execute()) {
echo json_encode(['success' => true, 'message' => 'successful.']);
} else {
echo json_encode(['success' => false, 'message' => 'Error: ' . $stmt->error]);
}
$stmt->close();
$conn->close();
?>
