//signup
function signup() {
  var email = document.getElementById("email").value;
  console.log("signup", email);
  if (email === "") {
    alert("Fill in the blank");
  } else {
    var epattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!epattern.test(email)) {
      alert("Please enter valid email");
    } else {
      console.log("here");
      // alert("");
      // event.preventDefault();
      //"Assignment1.html";
      window.location = "./Assignment1.html";
    }
  }
}

function f2() {
  window.location = "./Assignment3.html";
}

//password
function password() {
  var password = document.getElementById("pwd").value;
  if (password === "") {
    alert("Fill in the password");
    return false;
  }
  if (password.length < 8) {
    alert("Password should be at least 8 characters long.");
    return false;
  }
  var passpattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,10}$/;
  if (!passpattern.test(password)) {
    alert("Please enter a strong password");
  } else {
    alert("Entered password is strong");
  }
}

function myfunction2() {
  var x = document.getElementById("pwd");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function f1() {
  window.location.href = "./Assignment2.html";
}

//create account
function createacc() {
  var fname = document.getElementById("firstName").value;
  var lname = document.getElementById("lastName").value;
  if (fname == "" && lname == "") {
    alert("Enter the details");
  } else if (fname == "" || lname == "") {
    if (fname == "") {
      alert("Enter the first name");
    } else {
      alert("Enter the last name");
    }
  } else {
    window.location = "./Assignment4.html";
  }
}

//recovery email
function recover() {
  var email = document.getElementById("email1").value;
  if (email === "") {
    alert("Fill in the blank");
  } else {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter valid email");
    } else {
      alert("The mail has been sent to the recovery e-mail");
    }
  }
}

//password creation
function myfunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function createpass() {
  let passwordInput = document.getElementById("password").value;
  let confirmPasswordInput = document.getElementById("confirmPassword").value;
  let msgBox = document.getElementById("msgBox");

  if (passwordInput === "") {
    msgBox.innerHTML = "Enter the password";
    msgBox.style.display = "block";
    return false;
  } else if (passwordInput.length < 8) {
    msgBox.innerHTML = "Password should contain minimum 8 characters";
    msgBox.style.display = "block";
    return false;
  } else if (passwordInput.search(/[A-Z]/) < 0) {
    msgBox.innerHTML =
      "Your password must contain at least one capital letter.";
    msgBox.style.display = "block";
    return false;
  } else if (passwordInput.search(/[a-z]/i) < 0) {
    msgBox.innerHTML = "Your password must contain at least one letter.";
    msgBox.style.display = "block";
    return false;
  } else if (passwordInput.search(/[0-9]/) < 0) {
    msgBox.innerHTML = "Your password must contain at least one digit.";
    msgBox.style.display = "block";
    return false;
  } else if (confirmPasswordInput == "") {
    msgBox.innerHTML = "Confirm password is empty";
    msgBox.style.display = "block";
    return false;
  } else if (passwordInput !== confirmPasswordInput) {
    msgBox.innerHTML = "Passwords do not match";
    msgBox.style.display = "block";
    return false;
  } else {
    msgBox.style.display = "none";
    // window.location.href = "https://mail.google.com/mail/u/0/#inbox";
    alert("Account has been created");
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    return false;
  }
}

//basic info
function basic() {
  var valid = true;

  var month = document.getElementById("month").value;
  var day = document.getElementById("day").value;
  var year = document.getElementById("year").value;
  var gender = document.getElementById("gender").value;

  var monthError = document.getElementById("monthError");
  var dayError = document.getElementById("dayError");
  var yearError = document.getElementById("yearError");
  var genderError = document.getElementById("genderError");

  if (month === "Month") {
    monthError.style.display = "block";
    valid = false;
  } else {
    monthError.style.display = "none";
  }

  if (day === "") {
    dayError.style.display = "inline";
    valid = false;
  } else {
    dayError.style.display = "none";
  }

  if (year === "") {
    yearError.style.display = "inline";
    valid = false;
  } else {
    yearError.style.display = "none";
  }

  if (gender === "Gender") {
    genderError.style.display = "inline";
    valid = false;
  } else {
    genderError.style.display = "none";
  }

  if (valid) {
    window.location.href = "./Assignment5.html";
  }
}
