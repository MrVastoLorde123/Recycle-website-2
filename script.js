document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "user" && password === "pass") {
        alert("Welcome, " + username + "!");
        window.location.href = 'index.html';
    } else {
        alert("Invalid username or password.");
    }
});
