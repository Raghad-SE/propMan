//function to validate the Email address
/*function ValidateEmail(input) {
  //the pattren that the Email address should take 
  var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  //var input = document.getElementById("email").value;
  // var input;
  //document.getElementById("email").innerHTML = input;
 //  var valid = true;
  //if it is match return true
  if (input.match(validRegex)) {
  //  valid = true;
  //if not match return the massege and false 
  } else {
    alert("Invalid Email address!");
    document.form1.email.focus();
    //input.preventDefault(); 
   // valid = false;
  }  
 // return valid; 
}
//function to validate the phone number
function ValidatePhone(phone) {
  //the pattren that the phone number should take		 
  var phoneno = /^\d{10}$/;
  
 // var phone = document.getElementById("phoneNumber").value;
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
function CheckPassword(pass) { 
  var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  //var pass = document.getElementById("password").value;
  //var valid = true;
  if(pass.match(decimal)) 
  { 
    matchingPassword();
    //if (matchingPassword() == true){
    //  valid = true;
    //}else{
    //  valid = false;
   // }
  }
  else
  { 
    password.preventDefault();
    document.form1.password.focus();
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'The password should be [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]';
    e.preventDefault();
   // valid = false;
  }
 // return valid;
} 
function matchingPassword() {
  if (document.getElementById('password').value ==
    document.getElementById('confirmPassword').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
    return true;
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
    document.getElementById('password').value.preventDefault();
    return false;
  }
}
/*function start(){  
  //for singup 
  var singbutton = document.getElementById( "singbutton" );
  singbutton.addEventListener( "click", ValidatePhone );
  singbutton.addEventListener( "click", ValidateEmail);
  document.getElementById( "singbutton" ).addEventListener( "click", CheckPassword);
  //for login  
  var logbutton = document.getElementById( "logbutton" );
  logbutton.addEventListener( "click", ValidateEmail, false );
} // end function start
window.addEventListener( "load", start);
*/
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const phonenumberError = document.getElementById("phonenumber-error");
const passwordError = document.getElementById("password-error");
const submitBtn = document.querySelector('#singbutton');

phoneNumber.addEventListener("keyup", () => {
  if (phoneNumber.value == "") {
    phonenumberError.classList.add('phonenumber-error');
    phonenumberError.style.display = "block";
  } else {
    phonenumberError.style.display = "none";
  }
});

password.addEventListener("keyup", () => {
  if (password.value == "") {
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }
});

submitBtn.addEventListener("click", () => {
  if (phoneNumber.value == "") {
    phonenumberError.classList.add('phonenumber-error');
   // phonenumberError.style.display = "block";
  }
  if (password.value == "") {
    passwordError.style.display = "block";
  }
  else{
      phonenumberError.style.display = 'none';
      passwordError.style.display = "none";
      let cred = {
          password: `${password.value}`,
          password: `${password.value}`
      }

      console.log(cred);

  }
});