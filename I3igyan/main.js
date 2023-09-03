function onSubmit(event){
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const address = document.getElementById('address').value;
    const country = document.getElementById('country').value;
    const message = document.getElementById('message');
    const checkbox = document.getElementsByClassName('checkbox');
    
    event.preventDefault();
    console.log(fname);
    console.log(lname);
    console.log(email);
    console.log(number);
    console.log(address);
    console.log(country);
    console.log(message);
    console.log(checkbox);
  }
  
  window.onload = function(){
    document.getElementById('contactForm').addEventListener('submit',onSubmit);
  }