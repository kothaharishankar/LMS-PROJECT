<<<<<<< HEAD
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submission
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation (you can replace this with actual server-side logic later)
    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        window.location.href = "dashboard.html";  // Redirect to another page after successful login
    } else {
        alert("Invalid username or password.");
    }
});
=======
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submission
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation (you can replace this with actual server-side logic later)
    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        window.location.href = "dashboard.html";  // Redirect to another page after successful login
    } else {
        alert("Invalid username or password.");
    }
});
>>>>>>> fbf505eebd7ec6f075b09160a426170503275fb8
