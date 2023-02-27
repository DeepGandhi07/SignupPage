function isValidEmail(email) {
  const format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return format.test(email);
}
format;
function validateForm(event) {
  event.preventDefault(); // prevent form from submitting

  // Get form inputs
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validate inputs
  let isError = false;
  if (username === "") {
    document.getElementById("username-error").innerHTML =
      "Please Enter a username";
    isError = true;
  } else {
    document.getElementById("username-error").innerHTML = "";
  }

  if (email === "") {
    document.getElementById("email-error").innerHTML =
      "Please Enter an email address";
    isError = true;
  } else if (!isValidEmail(email)) {
    document.getElementById("email-error").innerHTML =
      "Please Enter a valid email address";
    isError = true;
  } else {
    document.getElementById("email-error").innerHTML = "";
  }

  if (password === "") {
    document.getElementById("password-error").innerHTML =
      "Please Enter a password";
    isError = true;
  } else if (password.length < 6) {
    document.getElementById("password-error").innerHTML =
      "Password must be at least 6 characters";
    isError = true;
  } else {
    document.getElementById("password-error").innerHTML = "";
  }

  // Submit form if no errors
  if (!isError) {
    document.forms[0].submit();
  }
}
