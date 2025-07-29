
<?php
include 'db_config.php';

header('Content-Type: application/json');
$input = json_decode(file_get_contents('php://input'), true);

$poseId = $input['id'] ?? null;

if (is_null($poseId)) {
echo json_encode(['success' => false, 'message' => 'id is null.']);
$conn->close();
exit();
}

$stmt = $conn->prepare("DELETE FROM poses WHERE id = ?");
$stmt->bind_param("i", $poseId);

if ($stmt->execute()) {
echo json_encode(['success' => true, 'message' => 'successful.']);
} else {
echo json_encode(['success' => false, 'message' => 'error: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
