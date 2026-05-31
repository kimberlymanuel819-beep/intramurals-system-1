function goBack() {
    window.history.back();
}

function changePassword() {
    alert("Password updated (demo only)");
}

function verifyAdmin() {
    const pass = document.getElementById("adminPassword").value;

    if (pass === "admin123") {
        window.location.href = "admin-dashboard.html";
    } else {
        alert("Wrong password");
    }
}