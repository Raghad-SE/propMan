
//function to validate the Email address
function ValidateEmail() {
  //the pattren that the Email address should take 
  var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  var input = document.getElementById("email").value;
  // var input;
  // document.getElementById("email").innerHTML = input;


  //if it is match return true
  if (input.match(validRegex)) {
    return true;
  //if not match return the massege and false 
  } else {
    alert("Invalid Email address!");
    //document.form1.email.focus();
    input.preventDefault();
  }   
}


//function to validate the phone number
function ValidatePhone() {
  //the pattren that the phone number should take		 
  var phoneno = /^\d{10}$/;
  
  var phone = document.getElementById("phoneNumber").value;
  //if its match return true
  if (phone.match(phoneno))
  {
    return true;
  }
  else
  { //not match return false
    alert("Invalid phone number!");
    phone.preventDefault();
    return false;
  }
}

function CheckPassword() { 
  var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  var pass = document.getElementById("password").value;

  if(pass.match(decimal)) 
  { 
    matchingPassword();
  }
  else
  { 
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'The password should be [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]';
    pass.preventDefault();
  }
} 

function matchingPassword() {
  if (document.getElementById('password').value ==
    document.getElementById('confirmPassword').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
    document.getElementById('password').value.preventDefault();
  }
}


function start(){  
  //for singup 
  var singbutton = document.getElementById( "singbutton" );
  singbutton.addEventListener( "click", ValidatePhone, false );
  singbutton.addEventListener( "click", ValidateEmail, false );
  singbutton.addEventListener( "click", CheckPassword, false );
  //for login
  var logbutton = document.getElementById( "logbutton" );
  logbutton.addEventListener( "click", ValidateEmail, false );

} // end function start
  
window.addEventListener( "load", start, false );