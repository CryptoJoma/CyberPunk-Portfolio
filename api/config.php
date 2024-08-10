<?php

// Database Configuration
define('DBUSER', 'DB_USER');
define('DBPWD', 'DB_PASS');
define('DBHOST', 'DB_HOST');
define('DBNAME', 'DB_NAME');

// Telegram API
// Telegram Bot Token
define('TELEGRAM_BOT_TOKEN', 'TG_BOT_TOKEN');
// Place your chat ID
define('TELEGRAM_CHAT_ID', 'TG_CHAT_TOKEN');

// Include DB, Functions, Classes, and anything else
include("archives/db.php");
include("archives/functions.php");

?>
