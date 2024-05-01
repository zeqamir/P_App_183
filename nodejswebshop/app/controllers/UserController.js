module.exports = {
    get: (req, res) => {
        res.send("User: AmirZeqiri");
    }
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // You can add your validation logic here

    // For demonstration purposes, just displaying the input values
    console.log('Username:', username);
    console.log('Password:', password);

    // You can perform further actions like sending the data to a server for validation
    // For this example, let's just reset the form
    this.reset();
});


