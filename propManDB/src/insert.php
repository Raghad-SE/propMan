<?php


include 'connect.php';
include 'signupValues.php';

//check if email is already registered query

if (isset($_POST['singbutton'])) {
  # code...
}
// <div class="alert alert-danger alert-dismissible fade in">
// <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
// <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
// </div>

$sql = "INSERT INTO user(firstname, lastname, email, phone, password,type) 
VALUES ('$firstName', '$lastName',' $email','$phone','$password','$type')";


if (isEmailExists($conn,$email)>0) {
  //   echo '<script  type="text/javascript">  
  //   <div class="alert alert-danger">
  //   <strong>Wrong!</strong>This email already exist!\nTry to login!!
  // </div></script>';
  echo '<script type="text/javascript">
       window.onload = function () { alert("This email already exist!\nTry to login!!");}
</script>';
    // header('Location: signin.html');
}else{
    if ($conn->query($sql) === TRUE) {
    header("Location:PropertyOwner.html");
  } else {
    // echo"couldn't insert to database!";
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

$conn->close();
function isEmailExists($conn, $email)
{
        // SQL Statement
        $sql = "SELECT * FROM `user` WHERE `email`='$email'";

        // Process the query
        $results = mysqli_query($conn,$sql);

        // Fetch Associative array
        $present = mysqli_num_rows($results);

        // Check if there is a result and response to  1 if email is existing
        return $present;
}
?>

