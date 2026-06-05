<<<<<<< HEAD
let attendanceData = [];
const teacherCredentials = {
    username: "teacher",
    password: "password123"
};

// Function for Teacher Login
function teacherLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === teacherCredentials.username && password === teacherCredentials.password) {
        alert("Login successful!");
        document.getElementById("loginSection").style.display = "none"; // Hide login section
        document.getElementById("attendancePortal").style.display = "block"; // Show attendance portal
    } else {
        alert("Invalid username or password. Please try again.");
    }

    return false; // Prevent form submission
}

// Function to Mark Attendance
function markAttendance() {
    const studentName = document.getElementById("studentName").value.trim();

    if (studentName) {
        attendanceData.push({ name: studentName, status: "Present" });
        updateAttendanceList();
        document.getElementById("studentName").value = "";
    }

    return false; // Prevent form submission
}

// Function to Update Attendance List
function updateAttendanceList() {
    const attendanceList = document.getElementById("attendanceList");
    attendanceList.innerHTML = "";

    attendanceData.forEach((record) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${record.name} - ${record.status}`;
        attendanceList.appendChild(listItem);
    });

    localStorage.setItem("attendanceData", JSON.stringify(attendanceData));
}

// Function to Clear Attendance Data
function clearAttendance() {
    attendanceData = [];
    updateAttendanceList();
}

// Load Saved Attendance Data on Page Load
document.addEventListener("DOMContentLoaded", () => {
    const savedData = localStorage.getItem("attendanceData");
    if (savedData) {
        attendanceData = JSON.parse(savedData);
        updateAttendanceList();
    }
});
=======
let attendanceData = [];
const teacherCredentials = {
    username: "teacher",
    password: "password123"
};

// Function for Teacher Login
function teacherLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === teacherCredentials.username && password === teacherCredentials.password) {
        alert("Login successful!");
        document.getElementById("loginSection").style.display = "none"; // Hide login section
        document.getElementById("attendancePortal").style.display = "block"; // Show attendance portal
    } else {
        alert("Invalid username or password. Please try again.");
    }

    return false; // Prevent form submission
}

// Function to Mark Attendance
function markAttendance() {
    const studentName = document.getElementById("studentName").value.trim();

    if (studentName) {
        attendanceData.push({ name: studentName, status: "Present" });
        updateAttendanceList();
        document.getElementById("studentName").value = "";
    }

    return false; // Prevent form submission
}

// Function to Update Attendance List
function updateAttendanceList() {
    const attendanceList = document.getElementById("attendanceList");
    attendanceList.innerHTML = "";

    attendanceData.forEach((record) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${record.name} - ${record.status}`;
        attendanceList.appendChild(listItem);
    });

    localStorage.setItem("attendanceData", JSON.stringify(attendanceData));
}

// Function to Clear Attendance Data
function clearAttendance() {
    attendanceData = [];
    updateAttendanceList();
}

// Load Saved Attendance Data on Page Load
document.addEventListener("DOMContentLoaded", () => {
    const savedData = localStorage.getItem("attendanceData");
    if (savedData) {
        attendanceData = JSON.parse(savedData);
        updateAttendanceList();
    }
});
>>>>>>> fbf505eebd7ec6f075b09160a426170503275fb8
