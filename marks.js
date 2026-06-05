<<<<<<< HEAD
const marksData = [
    {
        name: "k.harishankar",
        semester: "Semester 3",
        password: "1234",
        subjects: {
            Mathematics: 85,
            Java: 90,
            HtmlCss: 88,
        },
    },
    {
        name: "v.siddhartha",
        semester: "Semester 3",
        password: "1234",
        subjects: {
            Mathematics: 78,
            Java: 80,
            HtmlCss: 89,
        },
    },
    {
        name: "k.manikanta",
        semester: "Semester 3",
        password: "1234",
        subjects: {
            Mathematics: 92,
            Java : 88,
            HtmlCss: 95,
        },
    },
];

// Function to Display Marks
function displayMarks(student) {
    const marksList = document.getElementById("marksList");
    marksList.innerHTML = ""; // Clear any existing data

    const listItem = document.createElement("li");
    listItem.textContent = `${student.name} - ${student.semester}`;

    const subjectsList = document.createElement("ul");
    for (const [subject, marks] of Object.entries(student.subjects)) {
        const subjectItem = document.createElement("li");
        subjectItem.textContent = `${subject}: ${marks} marks`;
        subjectsList.appendChild(subjectItem);
    }

    listItem.appendChild(subjectsList);
    marksList.appendChild(listItem);
}

// Function to Validate User and Display Data
function validateUser() {
    const username = prompt("Enter your name:");
    const password = prompt("Enter your password:");

    const student = marksData.find(
        (entry) => entry.name === username && entry.password === password
    );

    if (student) {
        displayMarks(student);
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Initialize Validation and Marks Display on Page Load
document.addEventListener("DOMContentLoaded", () => {
    validateUser();
});
=======
const marksData = [
    {
        name: "k.harishankar",
        semester: "Semester 3",
        password: "1234",
        subjects: {
            Mathematics: 85,
            Java: 90,
            HtmlCss: 88,
        },
    },
    {
        name: "v.siddhartha",
        semester: "Semester 3",
        password: "1234",
        subjects: {
            Mathematics: 78,
            Java: 80,
            HtmlCss: 89,
        },
    },
    {
        name: "k.manikanta",
        semester: "Semester 3",
        password: "1234",
        subjects: {
            Mathematics: 92,
            Java : 88,
            HtmlCss: 95,
        },
    },
];

// Function to Display Marks
function displayMarks(student) {
    const marksList = document.getElementById("marksList");
    marksList.innerHTML = ""; // Clear any existing data

    const listItem = document.createElement("li");
    listItem.textContent = `${student.name} - ${student.semester}`;

    const subjectsList = document.createElement("ul");
    for (const [subject, marks] of Object.entries(student.subjects)) {
        const subjectItem = document.createElement("li");
        subjectItem.textContent = `${subject}: ${marks} marks`;
        subjectsList.appendChild(subjectItem);
    }

    listItem.appendChild(subjectsList);
    marksList.appendChild(listItem);
}

// Function to Validate User and Display Data
function validateUser() {
    const username = prompt("Enter your name:");
    const password = prompt("Enter your password:");

    const student = marksData.find(
        (entry) => entry.name === username && entry.password === password
    );

    if (student) {
        displayMarks(student);
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Initialize Validation and Marks Display on Page Load
document.addEventListener("DOMContentLoaded", () => {
    validateUser();
});
>>>>>>> fbf505eebd7ec6f075b09160a426170503275fb8
