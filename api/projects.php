<?php
header('Content-Type: application/json');
// Include the database configuration file
include 'config.php';

$sql = "SELECT * FROM projects";
$result = $db->query($sql);

$projects = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $projects[] = $row;
    }
}
echo json_encode($projects);

$conn->close();
?>
