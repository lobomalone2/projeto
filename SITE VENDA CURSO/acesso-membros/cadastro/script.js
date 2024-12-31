document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var fullname = document.getElementById('fullname').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  alert("Cadastro realizado com: " + fullname + ", " + email);

  
  // Implemente a lógica de cadastro aqui ou redirecione para outra página.
});


//alteraçãoaaa