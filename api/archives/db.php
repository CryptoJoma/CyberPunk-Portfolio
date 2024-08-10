<?php

// Create a new mysqli connection
$db = new mysqli(DBHOST, DBUSER, DBPWD, DBNAME);

// Check connection
if ($db->connect_error) {
    // Log error to a file instead of using die()
    error_log("Connection failed: " . $db->connect_error . "\n", 3, '../config.log');
    // You can optionally display a user-friendly message or redirect
    die("Sorry, we're experiencing technical difficulties.");
}

// Optionally, set character encoding
$db->set_charset('utf8mb4');
?>
