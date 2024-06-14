document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'block';
});

var x = document.getElementById("Login");
var y = document.getElementById("Register");
var z = document.getElementById("btn");

function Register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function Login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}
window.onload = function() {
    var defaultView = "login"; 
    if (defaultView === "login") {
        Login();
    } else {
        Register();
    }
}

// Function to exit the account modal
function exitAccountModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function togglePassword(inputId) {
    var inputField = document.getElementById(inputId);
    var icon = inputField.nextElementSibling;
    if (inputField.type === "password") {
        inputField.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        inputField.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
document.getElementById('accountBtn').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'block';
});

document.getElementById('cartBtn').addEventListener('click', function() {
    document.getElementById('cartModal').style.display = 'block';
});

document.getElementById('exitCartBtn').addEventListener('click', function() {
    document.getElementById('cartModal').style.display = 'none';
});
// Function to add items to the cart
function addToCart(productName, price) {
    // Add logic to add the item to the cart
    // For now, let's just display a message
    alert("Added " + productName + " to cart!");
    // Show the cart modal
    document.getElementById('cartModal').style.display = 'block';
    // Update the cart message to show that the cart is not empty
    document.getElementById('cartMessage').textContent = "Your cart contains: " + productName + " - $" + price;
}

 
 

