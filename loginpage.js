<<<<<<< HEAD
// Simulated user data
const users = [
    {
        username: "k.harishankar",
        password: "1234",
        profile: {
            name: "K.Hari Shankar's",
            class: "B.Tech",
            rollNo: "23A31A42B2"
        },
        attendance: {
            totalClasses: 69,
            attendedClasses: 50
        },
        marks: {
            Math: 90,
            Java: 90,
            Html: 88
        }
    },
    {
        username: "v.siddhartha",
        password: "1234",
        profile: {
            name: "V.Siddhartha'S",
            class: "B.Tech",
            rollNo: "23A31A42D0"
        },
        attendance: {
            totalClasses: 69,
            attendedClasses: 53
        },
        marks: {
            Math: 90,
            Java: 90,
            Html: 88
        }
    },
    {
        username: "k.manikanta",
        password: "1234",
        profile: {
            name: "k.Manikanta sairam'S",
            class: "B.Tech",
            rollNo: "23A31A42D0"
        },
        attendance: {
            totalClasses: 69,
            attendedClasses: 53
        },
        marks: {
            Math: 90,
            Java: 90,
            Html: 88
        }
    }
];

// Track login status
let loggedInUser = null;

// Login functionality
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Find matching user
    const user = users.find(
        user => user.username === username && user.password === password
    );

    if (user) {
        loggedInUser = user; // Save the logged-in user
        loginSuccess(user);
    } else {
        document.getElementById("loginError").innerText = "Invalid username or password!";
    }
});

function loginSuccess(user) {
    // Hide login page and show dashboard
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    // Populate dashboard data
    document.getElementById("studentName").innerText = user.profile.name;
    document.getElementById("profileName").innerText = user.profile.name;
    document.getElementById("profileClass").innerText = user.profile.class;
    document.getElementById("profileRoll").innerText = user.profile.rollNo;
}

// Show specific section
function showSection(sectionId) {
    // Check if user is logged in
    if (!loggedInUser) {
        alert("Please log in to access this section.");
        logout(); // Redirect to login if session is invalid
        return;
    }

    const sections = document.querySelectorAll(".section");
    sections.forEach(section => (section.style.display = "none"));

    document.getElementById(sectionId).style.display = "block";
}

// Logout functionality
function logout() {
    loggedInUser = null; // Clear session
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
    document.getElementById("loginForm").reset();
    document.getElementById("loginError").innerText = "";
}
=======
// Simulated user data
const users = [
    {
        username: "k.harishankar",
        password: "1234",
        profile: {
            name: "K.Hari Shankar's",
            class: "B.Tech",
            rollNo: "23A31A42B2"
        },
        attendance: {
            totalClasses: 69,
            attendedClasses: 50
        },
        marks: {
            Math: 90,
            Java: 90,
            Html: 88
        }
    },
    {
        username: "v.siddhartha",
        password: "1234",
        profile: {
            name: "V.Siddhartha'S",
            class: "B.Tech",
            rollNo: "23A31A42D0"
        },
        attendance: {
            totalClasses: 69,
            attendedClasses: 53
        },
        marks: {
            Math: 90,
            Java: 90,
            Html: 88
        }
    },
    {
        username: "k.manikanta",
        password: "1234",
        profile: {
            name: "k.Manikanta sairam'S",
            class: "B.Tech",
            rollNo: "23A31A42D0"
        },
        attendance: {
            totalClasses: 69,
            attendedClasses: 53
        },
        marks: {
            Math: 90,
            Java: 90,
            Html: 88
        }
    }
];

// Track login status
let loggedInUser = null;

// Login functionality
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Find matching user
    const user = users.find(
        user => user.username === username && user.password === password
    );

    if (user) {
        loggedInUser = user; // Save the logged-in user
        loginSuccess(user);
    } else {
        document.getElementById("loginError").innerText = "Invalid username or password!";
    }
});

function loginSuccess(user) {
    // Hide login page and show dashboard
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    // Populate dashboard data
    document.getElementById("studentName").innerText = user.profile.name;
    document.getElementById("profileName").innerText = user.profile.name;
    document.getElementById("profileClass").innerText = user.profile.class;
    document.getElementById("profileRoll").innerText = user.profile.rollNo;
}

// Show specific section
function showSection(sectionId) {
    // Check if user is logged in
    if (!loggedInUser) {
        alert("Please log in to access this section.");
        logout(); // Redirect to login if session is invalid
        return;
    }

    const sections = document.querySelectorAll(".section");
    sections.forEach(section => (section.style.display = "none"));

    document.getElementById(sectionId).style.display = "block";
}

// Logout functionality
function logout() {
    loggedInUser = null; // Clear session
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
    document.getElementById("loginForm").reset();
    document.getElementById("loginError").innerText = "";
}
>>>>>>> fbf505eebd7ec6f075b09160a426170503275fb8
