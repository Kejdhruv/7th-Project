function redirectTo(url) {
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.btn2').onclick = function () {
        redirectTo('sign.html');
    };

    document.querySelector('.btn1').onclick = function () {
        valid(); 
    };
});

function valid() {
    var email = document.querySelector("#email1").value;
    var pswd = document.querySelector("#password1").value; 
    
    if (email === "23122@iiitu.ac.in" && pswd === "12345") {
        alert("Email: " + email + "\nPassword: " + pswd);
        redirectTo('mv.html');
    } else {
        alert("Invalid email or password. Please try again.");
    }
}