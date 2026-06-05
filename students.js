<<<<<<< HEAD
let attendanceData = [40];

function calculateAttendance() {
    const totalClasses = 40;
    const presentCount = 35;
    const absentCount = totalClasses - presentCount;
    const attendancePercentage = totalClasses > 0 ? ((presentCount / totalClasses) * 100).toFixed(2) : 0;

    document.writeln(totalClasses);
    document.getElementById('presentCount').textContent = presentCount;
    document.getElementById('absentCount').textContent = absentCount;
    document.getElementById('attendancePercentage').textContent = `${attendancePercentage}%`;
}

// Load attendance data and calculate attendance on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('attendanceData');
    if (savedData) {
        attendanceData = JSON.parse(savedData);
        calculateAttendance();
    }
});
=======
let attendanceData = [40];

function calculateAttendance() {
    const totalClasses = 40;
    const presentCount = 35;
    const absentCount = totalClasses - presentCount;
    const attendancePercentage = totalClasses > 0 ? ((presentCount / totalClasses) * 100).toFixed(2) : 0;

    document.writeln(totalClasses);
    document.getElementById('presentCount').textContent = presentCount;
    document.getElementById('absentCount').textContent = absentCount;
    document.getElementById('attendancePercentage').textContent = `${attendancePercentage}%`;
}

// Load attendance data and calculate attendance on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('attendanceData');
    if (savedData) {
        attendanceData = JSON.parse(savedData);
        calculateAttendance();
    }
});
>>>>>>> fbf505eebd7ec6f075b09160a426170503275fb8
