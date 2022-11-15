<html>
  <!--This is page to for sing up-->
  <head>
    <title>SINGUP</title>
    <link rel="stylesheet" type="text/css" href="../CSS/loginn.css"/>
    <script src="../JS/loginSignup.js"></script>
  
  </head>
  <body>
    <div class="session">
      <div class="left">
        <svg enable-background="new 0 0 300 302.5" version="1.1" viewBox="0 0 300 302.5" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
          <style type="text/css">
            .st01 {
              fill: rgb(255, 255, 255);
            }
          </style>
          <path class="st0" d="m126 302.2c-2.3 0.7-5.7 0.2-7.7-1.2l-105-71.6c-2-1.3-3.7-4.4-3.9-6.7l-9.4-126.7c-0.2-2.4 1.1-5.6 2.8-7.2l93.2-86.4c1.7-1.6 5.1-2.6 7.4-2.3l125.6 18.9c2.3 0.4 5.2 2.3 6.4 4.4l63.5 110.1c1.2 2 1.4 5.5 0.6 7.7l-46.4 118.3c-0.9 2.2-3.4 4.6-5.7 5.3l-121.4 37.4zm63.4-102.7c2.3-0.7 4.8-3.1 5.7-5.3l19.9-50.8c0.9-2.2 0.6-5.7-0.6-7.7l-27.3-47.3c-1.2-2-4.1-4-6.4-4.4l-53.9-8c-2.3-0.4-5.7 0.7-7.4 2.3l-40 37.1c-1.7 1.6-3 4.9-2.8 7.2l4.1 54.4c0.2 2.4 1.9 5.4 3.9 6.7l45.1 30.8c2 1.3 5.4 1.9 7.7 1.2l52-16.2z"/>
        </svg>
      </div>
      <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post" class="log-in" name="signupform" autocomplete="off" onsubmit="return validForm()">
        <h4>SING UP</h4>
        <div class="floating-label">
          <input placeholder="First Name" type="text" name="firstName" id="firstName" oninput="validFName()" autocomplete="off" required>
          <label for="firstName">First Name:</label>
        </div>
        <label style="color: red;" id="errorFN"></label>
        <div class="floating-label">
          <input placeholder="Last Name" type="text" name="lastName" id="lastName" oninput="validLName()" autocomplete="off" required>
          <label for="lastName">Last Name:</label>
        </div>
        <label style="color: red;" id="errorLN"></label>
        <div class="floating-label">
            <input placeholder="Phone Number" type="tel" name="phoneNumber" id="phoneNumber" oninput="validPhone()" autocomplete="off" required>
            <label for="phoneNumber">Phone Number:</label>
          </div>            
          <label style="color: red;" id="phonenumber-error"></label>
        <div class="floating-label">
          <input placeholder="Email" type="email" name="email" id="email" autocomplete="off"  oninput="validEmail()" required>
          <label for="email">Email:</label>
        </div>
        <label style="color: red;" id="email-error">*<?php echo $emailErr;?></label>
        <div class="floating-label">
          <input placeholder="Password" type="password" name="password" id="password" autocomplete="off"  oninput="validPass()"required>
          <label for="password">Password:</label>
        </div>
        <div style="color: red;" id="pass-error"></div>
        <div class="floating-label">
          <input placeholder="Confirm Password" type="password" name="confirmPassword" id="confirmPassword" oninput="validPass()" autocomplete="off" required>
          <label for="confirmPassword">Confirm Password:</label>  
         </div>
         <label style="color: red;" id="re-pass-error"></label>
        <span id='message'></span>
        <div class="floating-label">
          <select name="userType" id="userType" required>
              <option value="0" selected disabled>User Type</option>
              <option value="propertyOwner">Property Owner</option>
              <option value="tenant">Tenant</option>
          </select>
        <div>
        <label style="color: red;" id="type-error"></label>
          <br>
          <button class="login-btn-insingup" type="submit" onClick="document.location= 'signin.html' ">Log in</button></a>
          <button class="signup-btn-insingup" type="submit" id="singbutton">Sing up</button>
      </div>
        <!--id="singbutton" onclick="ValidateEmail(document.form1.email);ValidatePhone(document.form1.phoneNumber);CheckPassword(document.form1.password);"-->
      </form>
    </div>
  </body>
</html>