<?php

include 'connect.php';
//check if account does exist in DB

$email=$_POST['email'];
$password=$_POST['password'];


//check if email is already registered query
$find_email=mysqli_query($conn, "SELECT * FROM `user` where `email` = '$email' ");

$passwordMatchEmail=mysqli_query($conn, "SELECT * FROM `user` where `email` = '$email' AND `password` = '$password' ");


if (mysqli_num_rows($find_email)>0) {
  //email is already registered, user can log in:

    if(mysqli_num_rows($passwordMatchEmail)>0) {
      //entered email & password are correct
      header("Location: PropertyOwner.html");
    }else{
    echo '<script>alert("Password is not correct!\nTry again!!")</script>';
  }
} else {
    echo '<script>alert("This email doesn\'t exist!\nTry to signup!!")</script>';
    // header("Location: signup.html");
}
  
  $conn->close();
// $query=mysqli_query("SELECT email FROM user WHERE email=$email", $con);


?>