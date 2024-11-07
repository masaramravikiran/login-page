function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Here, you can add code to handle the form submission,
  // like sending data to a server or showing a success message.

  alert(`Thank you for your message, ${name}! We will get back to you soon.`);
  
  // Reset form fields after submission
  document.getElementById('contact-form').reset();
}
