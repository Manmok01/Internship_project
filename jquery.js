// $(document).ready(
//   function fg(){
//     $.ajax({
//       type: "GET",
//       url: "code.json",
//       async: false,
//       contentType: "aaplication/json",
//       crossDomain: true,
//       success:function(msg){
//         console.log("resp code.json",msg);
//       }
//     })
//   });


//sign up
$(document).ready(function () {
  $.getJSON("code.json", function (data) {
    var jsonData = data.sign;
    $("#signupForm").click(function () {
      var email = $("#email").val();
      if (email === "") {
        $("#msgbox").text("Fill in the blank");
        $("#msgbox").css("color", "red");
        return false;
      } else {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          $("#msgbox").text("Please enter a valid email");
          $("#msgbox").css("color", "red");
        } else {
          var emailFound = false;
          for (var i = 0; i < jsonData.length; i++) {
            if (jsonData[i].Username === email) {
              emailFound = true;
              break;
            }
          }
          if (emailFound) {
            // Store the email in local storage
            localStorage.setItem("username", email);
            window.location = "./Assignment1.html";
          } else {
            $("#msgbox").text("Email does not match");
            $("#msgbox").css("color", "red");
          }
        }
      }
    });
  });
});



$(document).ready(function () {
  $("#f1").click(function () {
    window.location.href = "./Assignment3.html";
  });
});

//password
$(document).ready(function () {
  $.getJSON("code.json", function (data) {
    var jsonData = data.sign;
    // console.log("JSON Data:", jsonData);
    $("#passwordButton").click(function () {
      var password = $("#pwd").val();
      var email = localStorage.getItem("username");
      // console.log("Email:", email);
      // console.log("Password:", password);
      if (password === "") {
        $("#msgBox").text("Fill in the password");
        $("#msgBox").css("color", "red");
        return false;
      }
      if (password.length < 8) {
        $("#msgBox").text("Password should be at least 8 characters long.");
        $("#msgBox").css("color", "red");
        return false;
      }
      var passpattern =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,10}$/;
      if (!passpattern.test(password)) {
        $("#msgBox").text("Please enter a strong password");
        $("#msgBox").css("color", "red");
        return false;
      } else {
        var validCredentials = false;
        for (var i = 0; i < jsonData.length; i++) {
          // console.log("Comparing with:", jsonData[i]);
          if (jsonData[i].Username === email && jsonData[i].password === password) {
            validCredentials = true;
            break;
          }
        }
        // console.log("Valid Credentials:", validCredentials);
        if (validCredentials) {
          $("#msgBox").text("Entered password is strong and valid");
          $("#msgBox").css("color", "green");
          // window.location.href = "https://mail.google.com/mail/u/0/#inbox";
        } else {
          $("#msgBox").text("Invalid email or password");
          $("#msgBox").css("color", "red");
        }
      }
    });
  });
});


$(document).ready(function () {``
  $("#checkBox").click(function () {
    var x = $("#pwd");
    if (x.attr("type") === "password") {
      x.attr("type", "text");
    } else {
      x.attr("type", "password");
    }
  });
});

$(document).ready(function () {
  $("#f2").click(function () {
    window.location.href = "./Assignment2.html";
  });
});

//recovery email
$(document).ready(function () {
  $.getJSON("code.json", function (data) {
    var jsonData = data.sign2;
    $("#recoverButton").click(function () {
      var email = $("#email1").val();
      if (email === "") {
        $("#msgbox").text("Enter the details");
        $("#msgbox").css("color", "red");
        return false;
      } else {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          $("#msgbox").text("Please enter valid email");
          $("#msgbox").css("color", "red");
          return false;
        } else {
          var emailFound = false;
          for (var i = 0; i < jsonData.length; i++) {
            if (jsonData[i].Username === email) {
              emailFound = true;
              break;
            }
          }
        }
        if (emailFound) {
          $("#msgbox").text("Mail has been sent");
          $("#msgbox").css("Color", "green");
        } else {
          $("#msgbox").text("Email does not match");
          $("#msgbox").css("color", "red");
        }
      }
    });
  });
});

//account creation
$(document).ready(function () {
  $("#createAccButton").click(function () {
    var fname = $("#firstName").val();
    
    var lname = $("#lastName").val();
    if (fname === "" && lname === "") {
      $("#messagebox").text("Enter the details");
      $("#messagebox").css("color", "red");
    } else if (fname === "" || lname === "") {
      if (fname === "") {
        $("#messagebox").text("Enter the first name");
        $("#messagebox").css("color", "red");
      } else {
        $("#messagebox").text("Enter the last name");
        $("#messagebox").css("color", "red");
      }
    } else {
      window.location = "./Assignment4.html";
    }
  });
});

//basic information
$(document).ready(function () {
  $("#basicButton").click(function () {
    var valid = true;

    var month = $("#month").val();
    var day = $("#day").val();
    var year = $("#year").val();
    var gender = $("#gender").val();

    var monthError = $("#monthError");
    var dayError = $("#dayError");
    var yearError = $("#yearError");
    var genderError = $("#genderError");

    if (month === "Month") {
      monthError.show();
      valid = false;
    } else {
      monthError.hide();
    }

    if (day === "") {
      dayError.show();
      valid = false;
    } else {
      if ((day < 1 || day > 31) && day != "") {
        dayError.html("Please enter the date between 1 and 31").show();
        valid = false;
      } else {
        dayError.hide();
      }
    }

    if (year === "") {
      yearError.show();
      valid = false;
    } else {
      yearError.hide();
    }

    if (gender === "Gender") {
      genderError.show();
      valid = false;
    } else {
      genderError.hide();
    }

    if (valid) {
      window.location.href = "./Assignment5.html";
    }
  });
});

//password creation
$(document).ready(function () {
  $("#createPassButton").click(function () {
    let passwordInput = $("#password").val();
    let confirmPasswordInput = $("#confirmPassword").val();
    let msgBox = $("#msgBox");

    if (passwordInput === "") {
      msgBox.html("Enter the password").show();
    } else if (passwordInput.length < 8) {
      msgBox.html("Password should contain minimum 8 characters").show();
    } else if (!/[A-Z]/.test(passwordInput)) {
      msgBox
        .html("Your password must contain at least one capital letter.")
        .show();
    } else if (!/[a-z]/i.test(passwordInput)) {
      msgBox.html("Your password must contain at least one letter.").show();
    } else if (!/[0-9]/.test(passwordInput)) {
      msgBox.html("Your password must contain at least one digit.").show();
    } else if (confirmPasswordInput === "") {
      msgBox.html("Confirm password is empty").show();
    } else if (passwordInput !== confirmPasswordInput) {
      msgBox.html("Passwords do not match").show();
    } else {
      msgBox.hide();
      alert("Account has been created");
      $("#password, #confirmPassword").val("");
    }
    return false;
  });
});

$(document).ready(function () {
  $("#checkbox").click(function () {
    var x = $("#password");
    if (x.attr("type") === "password") {
      x.attr("type", "text");
    } else {
      x.attr("type", "password");
    }
  });
});

$(document).ready(function(){
  $('#f3').click(function(){
    window.location.href = "./Assignment.html";
  });
});

$(document).ready(function(){
  $('#f4').click(function(){
    window.location.href = "./Assignment3.html";
  });
});