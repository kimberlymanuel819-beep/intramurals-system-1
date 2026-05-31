function register(type) {
    alert(type + " registered successfully!");

    let records = JSON.parse(localStorage.getItem("registrations")) || [];
    records.push(type);
    localStorage.setItem("registrations", JSON.stringify(records));
}