<<<<<<< HEAD
// Predefined student profiles
const students = [
  {
    username: "k.harishankar",
    password: "1234",
    profile: {
      name: "K. Harishankar",
      age: 19,
      course: "B.Tech - AI&ML",
      photo: "https://via.placeholder.com/100?text=Harishankar",
    },
  },
  {
    username: "v.siddhartha",
    password: "1234",
    profile: {
      name: "V. Siddhartha",
      age: 19,
      course: "B.Tech - AI&ML",
      photo: "siddu.jpg",
    },
  },
  {
    username: "k.manikanta",
    password: "1234",
    profile: {
      name: "K. Manikanta",
      age: 19,
      course: "B.Tech - AI&ML",
      photo: "manikanta",
    },
  },
];

// DOM elements
const loginForm = document.getElementById("loginForm");
const profileDisplay = document.getElementById("profileDisplay");
const displayName = document.getElementById("displayName");
const displayAge = document.getElementById("displayAge");
const displayCourse = document.getElementById("displayCourse");
const displayPhoto = document.getElementById("displayPhoto");
const loginError = document.getElementById("loginError");

// Debugging Students Array
console.log("Students Array Initialized:", students);

// Login functionality
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  console.log("Entered Username:", username);
  console.log("Entered Password:", password);

  // Find the matching student
  const student = students.find(
    (s) =>
      s.username.toLowerCase() === username.toLowerCase() &&
      s.password === password
  );

  console.log("Matched Student:", student);

  if (student) {
    // Display the student's profile
    showProfile(student.profile);
  } else {
    loginError.textContent = "Invalid username or password!";
    profileDisplay.style.display = "none";
  }
});

// Function to display profile
function showProfile(profile) {
  displayName.textContent = profile.name;
  displayAge.textContent = `Age: ${profile.age}`;
  displayCourse.textContent = `Course: ${profile.course}`;
  if (profile.photo) {
    displayPhoto.src = profile.photo;
    displayPhoto.style.display = "block";
  } else {
    displayPhoto.style.display = "none";
  }

  // Clear error and show the profile display
  loginError.textContent = "";
  profileDisplay.style.display = "block";

  console.log("Profile displayed successfully:", profile);
}
=======
// Predefined student profiles
const students = [
  {
    username: "k.harishankar",
    password: "1234",
    profile: {
      name: "K. Harishankar",
      age: 19,
      course: "B.Tech - AI&ML",
      photo: "https://via.placeholder.com/100?text=Harishankar",
    },
  },
  {
    username: "v.siddhartha",
    password: "1234",
    profile: {
      name: "V. Siddhartha",
      age: 19,
      course: "B.Tech - AI&ML",
      photo: "siddu.jpg",
    },
  },
  {
    username: "k.manikanta",
    password: "1234",
    profile: {
      name: "K. Manikanta",
      age: 19,
      course: "B.Tech - AI&ML",
      photo: "manikanta",
    },
  },
];

// DOM elements
const loginForm = document.getElementById("loginForm");
const profileDisplay = document.getElementById("profileDisplay");
const displayName = document.getElementById("displayName");
const displayAge = document.getElementById("displayAge");
const displayCourse = document.getElementById("displayCourse");
const displayPhoto = document.getElementById("displayPhoto");
const loginError = document.getElementById("loginError");

// Debugging Students Array
console.log("Students Array Initialized:", students);

// Login functionality
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  console.log("Entered Username:", username);
  console.log("Entered Password:", password);

  // Find the matching student
  const student = students.find(
    (s) =>
      s.username.toLowerCase() === username.toLowerCase() &&
      s.password === password
  );

  console.log("Matched Student:", student);

  if (student) {
    // Display the student's profile
    showProfile(student.profile);
  } else {
    loginError.textContent = "Invalid username or password!";
    profileDisplay.style.display = "none";
  }
});

// Function to display profile
function showProfile(profile) {
  displayName.textContent = profile.name;
  displayAge.textContent = `Age: ${profile.age}`;
  displayCourse.textContent = `Course: ${profile.course}`;
  if (profile.photo) {
    displayPhoto.src = profile.photo;
    displayPhoto.style.display = "block";
  } else {
    displayPhoto.style.display = "none";
  }

  // Clear error and show the profile display
  loginError.textContent = "";
  profileDisplay.style.display = "block";

  console.log("Profile displayed successfully:", profile);
}
>>>>>>> fbf505eebd7ec6f075b09160a426170503275fb8
