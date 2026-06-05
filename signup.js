<<<<<<< HEAD
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const fullName = document.getElementById('fullName').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const errorElement = document.getElementById('signupError');

    // Simple validation
    if (password !== confirmPassword) {
        errorElement.textContent = "Passwords do not match.";
        return;
    }

    // Clear previous error messages
    errorElement.textContent = "";

    // Simulate a successful sign-up
    alert(`Welcome, ${fullName}! Your account has been created successfully.`);
    window.location.href = 'loginpage.html'; // Redirect to login page
});
=======
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const fullName = document.getElementById('fullName').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const errorElement = document.getElementById('signupError');

    // Simple validation
    if (password !== confirmPassword) {
        errorElement.textContent = "Passwords do not match.";
        return;
    }

    // Clear previous error messages
    errorElement.textContent = "";

    // Simulate a successful sign-up
    alert(`Welcome, ${fullName}! Your account has been created successfully.`);
    window.location.href = 'loginpage.html'; // Redirect to login page
});
>>>>>>> fbf505eebd7ec6f075b09160a426170503275fb8
