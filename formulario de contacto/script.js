document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Aquí puedes agregar la lógica para enviar el formulario por AJAX o cualquier otra forma que desees
  
    // Por ejemplo, puedes mostrar una alerta con los datos ingresados
    alert('Nombre: ' + name + '\nEmail: ' + email + '\nMensaje: ' + message);
  });
  