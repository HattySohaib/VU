document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Read input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Predefined credentials
    const validUsername = "181011072";
    const validPassword = "tasfiya";

    // Check credentials
    if (username === validUsername && password === validPassword) {
      // Redirect on successful login
      window.location.href = "result.html";
    } else {
      alert("Invalid username or password");
    }
  });
