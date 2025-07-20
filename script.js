function register() {
  const username = document.getElementById('regUsername').value;
  const password = document.getElementById('regPassword').value;

  if(username && password) {
    // Save user (simulating password hashing with btoa here)
    localStorage.setItem(username, btoa(password));
    alert('Registered successfully!');
  } else {
    alert('Please fill all fields.');
  }
}

function login() {
  const username = document.getElementById('logUsername').value;
  const password = document.getElementById('logPassword').value;

  const stored = localStorage.getItem(username);

  if(stored && atob(stored) === password) {
    document.getElementById('protected').classList.remove('hidden');
    document.getElementById('login').classList.add('hidden');
    document.getElementById('register').classList.add('hidden');
  } else {
    alert('Invalid credentials.');
  }
}

function logout() {
  document.getElementById('protected').classList.add('hidden');
  document.getElementById('login').classList.remove('hidden');
  document.getElementById('register').classList.remove('hidden');
}
