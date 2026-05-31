function login() {
    const name = document.getElementById("name").value;
    const pass = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    if (!name || !pass) {
        alert("Fill all fields");
        return;
    }

    localStorage.setItem("user", JSON.stringify({ name, role }));

    if (role === "Admin") {
        window.location.href = "admin-dashboard.html";
    } else {
        window.location.href = "student-dashboard.html";
    }
}