
<!-- host name: propmanhost -->
<!-- user: propMan -->
<!-- password host: femdej-Safka7-jambob -->

<?php
$servername = "localhost";
$username = "propMan";
$pass = "femdej-Safka7-jambob";
$dbname = "propMan";

// Create connection
$conn = new mysqli($servername, $username, $pass,$dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 
// echo "Connected successfully";
?>