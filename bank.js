

// get userEmail
document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;


    // get userPassword
    const passField = document.getElementById("user-password");
    const userPass = passField.value;

    // check valid email and password
    if (userEmail == 'sontan@gmail.com' && userPass == 'secret') {
        window.location.href = 'banking.html';
    }
    else {

    }
})
