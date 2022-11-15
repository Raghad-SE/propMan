<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>PROPMAN</title>
  <link href="css/PropertyOwnerStyle.css" rel="stylesheet">
  <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>

</head>
<body>
<div class="wrapper hover_collapse">
	<div class="top_navbar">
		<div class="logo"><a class="navbar-brand" href="#"><img src="images/propman.png" alt=""></a></div>
		<div class="menu">
			<div class="hamburger">
				<i class="fas fa-bars"></i>
			</div>

		</div>
	</div>

<!--DASHBOARD for sama-->
	<div class="sidebar">
		<div class="sidebar_inner">
		<ul>
			<li>
				<a href="#dashboard">
					<span class="icon"><i class="fa fa-qrcode"></i></span>
					<span class="text">Dashboard</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span class="icon"><i class="fa fa-tasks"></i></span>
					<span class="text">Review tenants summary</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span class="icon"><i class="fa fa-money-check-alt"></i></span>
					<span class="text">Payment status</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span class="icon"><i class="fa fa-pen"></i></span>
					<span class="text">Maintenance request</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span class="icon"><i class="fa fa-cogs"></i></span>
					<span class="text">Maintenance status</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span class="icon"><i class="fa fa-calendar-alt"></i></span>
					<span class="text">review due date</span>
				</a>
			</li>
			<li>
				<a href="#">
					<span class="icon"><i class="fa fa-id-card"></i></span>
					<span class="text">Contact</span>
				</a>
			</li>

		</ul>
		</div>
	</div>


</div>


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

$sql = "INSERT INTO `contract`(`tenantName`, `tenanEmail`, `builingNo`, `secondaryNo`, `floorNo`, `unitNo`) 
VALUES ('$tenantName','$tenantEmail','$buildingNo','$secondaryNo','$floorNo','$unitNo')";


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






<section class = "content-area" id="dashboard">
	<div class ="heading"> 
		<h2>Dashboard</h2>
	</div>

	<div class ="cards">
		<div class="card col-md-4">
			<div class="file-img"></div>
			<span class="file-title">Add Tenant : </span> 
			<br><br>
			<a class="btn" id="addTenant">+</a> <br><br>
		</div>
	</div>
</section> 


<script src="PropertyOwner.js"></script>
</body>
</html>
