<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"));

$name = trim($data->name);
$email = trim($data->email);
$message = trim($data->message);

$errors = [];
$isValid = true;

if (empty($name) || strlen($name) < 2) {
    $errors['name'] = 'Name must be at least 2 characters long';
    $isValid = false;
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Please enter a valid email address';
    $isValid = false;
}
if (empty($message) || strlen($message) < 10) {
    $errors['message'] = 'Message must be at least 10 characters long';
    $isValid = false;
}

if ($isValid) {
    $to = 'coffee@joma.dev';
    $subject = 'Contact Form Submission';
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $body = "<p><strong>Name:</strong> $name</p>";
    $body .= "<p><strong>Email:</strong> $email</p>";
    $body .= "<p><strong>Message:</strong></p><p>$message</p>";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Message sent successfully.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error sending message.']);
    }
} else {
    echo json_encode(['status' => 'error', 'errors' => $errors]);
}
?>
