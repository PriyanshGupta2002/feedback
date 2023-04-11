document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Send the form data to EmailJS using the sendForm() function
    emailjs.sendForm("service_90cgg5t","template_ylq8ard", this)
       .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('Thank you for your feedback!');
       }, function(error) {
          console.log('FAILED...', error);
          alert('There was an error sending your feedback. Please try again later.');
       });
 });