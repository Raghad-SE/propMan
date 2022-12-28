
function onlyLetters(name) {
  //first and last name must contains alphapatics chars onnllyy!
  return /^[A-Za-z]*$/.test(name);
}
function isPhone(phone) {
  //10 digits length, must start with 05
  return /^05+[0-9]{8}$/.test(phone);
}

function isMatchEmail(email) {
  //email must contain part of chars(string/digits/chars) ,
  //followed by '@' char < this is a must!,
  //followed by a set of chars,
  //followed by a dot '.' this is also a must,
  //follwed by email extention part
  //all of these conditions must applied! 
  return /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(email);
}
  
function isMatchPassword(password) {
  //length must be == 8 chars and less than 30 chars,
  //must contains an upper letter,
  //must contain a lower lettr,
  //must contain digit.
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,30}$/.test(password);
}
/*--------------------------------------------------------- */


var phonenumberError = document.getElementById("phonenumber-error");
var passwordError = document.getElementById("password-error");
var submitBtn = document.querySelector('.signup-btn-insingup');

function validFName() {
  var fname=document.getElementById("firstName").value.trim();
  let error=document.getElementById("errorFN");
  if (fname.length==0) {
    error.innerHTML= "First name is required!";
    return false;

  }else if (onlyLetters(fname)==false) {
    error.innerText="Your first name must contains alphapatics characters only!";
    return false;
  }
  else if(fname.length<3){
    error.innerHTML="Min length of your first name must be at least 3 characters!";
    return false;

  }else if (fname.length>10) {
    error.innerHTML="Max length of your first name is 10 characters!";
    return false;

  }
  else{
   error.innerText=null;
    return true;
  }
  
}
function validLName() {
  var fname=document.getElementById("lastName").value.trim();
  let error=document.getElementById("errorLN");
  if (fname.length==0) {
    error.innerHTML= "Last name is required!";
    return false;

  }else if (onlyLetters(fname)==false) {
   error.innerText="Your last name must contains alphapatics characters only!";
    return false;
  }
  else if(fname.length<3){
    error.innerHTML="Min length of your last name must be at least 3 characters!";
    return false;

  }else if (fname.length>10) {
    error.innerHTML="Max length of your last name is 10 characters!";
    return false;

  }
  else{
    error.innerText=null;
    return true;
  }
  
}

function validPhone() {
  var phoneNumber = document.getElementById("phoneNumber").value.trim();
  let error=document.getElementById("phonenumber-error");
  if (phoneNumber.length==0) {
    error.innerHTML="Phone number is required!";
    return false;
  }else if (/^\D$/.test(phoneNumber)==true) {
    error.innerHTML="Phone number must contain digits only!";
    return false;
  }else if(isPhone(phoneNumber)==false){
    error.innerHTML="Phone number must match this pattern: 05********";
    return false;
  }else{
    error.innerHTML=null;
    return true;
  }
}


function validEmail() {
var email=document.getElementById("email").value.trim();
let error=document.getElementById("email-error");
if (email==0) {
  error.innerHTML="Email is required!";
  return false;
}else if (isMatchEmail(email)==false) {
  error.innerHTML="Provide a valid email!";
  return false;}
else{
  error.innerHTML=null;
  return true;
}
}


function validPass() {
  var LessThanMin="Password length must be at least 8 charecters!";
  var moreThanMax=" Password length must be at most 30 charecters!";
  var phonePattern=`The password should contains:<br/>
  * at least one lowercase letter, <br/>
  * one uppercase letter,<br/>
  * and one numeric digit.`;
  var mustMatch="Password confirmation doesn't match!"
  var password = document.getElementById("password").value.trim();
  var confirmPass=document.getElementById("confirmPassword").value.trim();

  let error1=document.getElementById("pass-error");
  let error2=document.getElementById("re-pass-error");

  if (password==0) {
      error1.innerHTML="Password is required!";
     return false;  
  }else if(password.length>0){
    //pass length is less than min
    if (password.length<8) {
      error1.innerHTML=LessThanMin;
      return false;
    }
    //pass length and pattern matches requirements
    else if (isMatchPassword(password)==true) {
      error1.innerHTML=null;
      if (confirmPass==0) {
        error2.innerHTML="Password confirmation is required!";
        return false;
      }else if (password!=confirmPass) {
        error2.innerHTML=mustMatch;
        return false;
      }else{
        error2.innerHTML=null;
        return true;
      }
    }
    //pass length is more than max
    else if (password.length>30) {
      error1.innerHTML=moreThanMax;
      return false;
    }
    //pass doesn't match required pattern
    else if (isMatchPassword(password)==false) {
      error1.innerHTML=phonePattern;
      return false;
    }
  }
}


function validForm() {
    var phoneNumber = document.getElementById("phoneNumber").value.trim();
if (validEmail()==false||validFName()==false||validLName()==false||validPhone()==false||validPass()==false) {
    alert("All fields are required!!");
    return false;
  }
  if(document.getElementById('userType').selectedOptions[0].value==0){
    alert("You have to select an account type!");
    return false;
  }
  
  return true;
}