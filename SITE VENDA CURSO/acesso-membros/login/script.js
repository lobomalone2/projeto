document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  // Simulate login validation

  if (email === "admin" && password === "admin") {
    alert("Login successful!");
} else {
    document.getElementById('error-message').textContent = "Invalid username or password!";
}

});
