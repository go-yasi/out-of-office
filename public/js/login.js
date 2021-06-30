const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();
  
  // Gather the data from the form elements on the page
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  
  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/api/location');
    } else {
      alert('Failed to log in ☹︎');
    }
  }
};

const signUpFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const username = document.querySelector('#username-signup').value.trim();
  const location = document.querySelector('#location-signup').value.trim();
  const bio = document.querySelector('#bio-signup').value.trim();
  
  
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({
      name,
      email,
      password,
      username,
      location,
      bio,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/api/location');
  } else {
    alert('Failed to log in ☹︎');
  }

};
  
document
  .querySelector('.login-form')
  // when I submit the form that has a class of login-form, run the function
  .addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signUpFormHandler);
  