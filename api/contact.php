<?php
header('Content-Type: application/json');
include("config.php");

$data = json_decode(file_get_contents("php://input"));

$email = trim($data->email);
$message = trim($data->message);

$errors = [];
$isValid = true;

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Please enter a valid email address';
    $isValid = false;
}
if (empty($message) || strlen($message) < 10) {
    $errors['message'] = 'Message must be at least 10 characters long';
    $isValid = false;
}

if ($isValid) {
    $botToken = TELEGRAM_BOT_TOKEN; // Replace with your bot token
    $chatId = TELEGRAM_CHAT_ID;     // Replace with your chat ID

    $text = "New Message:\n\n";
    $text .= "Email: $email\n";
    $text .= "Message:\n$message";

    $apiUrl = "https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=" . urlencode($text);

    $response = file_get_contents($apiUrl);
    $response = json_decode($response, true);

    if ($response['ok']) {
        echo json_encode(['status' => 'success', 'message' => 'Message sent successfully.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error sending message.']);
    }
} else {
    echo json_encode(['status' => 'error', 'errors' => $errors]);
}
?>
