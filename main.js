// Functions to traget the classes and IDs in thye HTML
let id = function (id) {
    return document.getElementById(id);
}
let className = function (className) {
    return document.getElementsByClassName(className);
}
// Variable to store the Classes and IDs in the HTML
let firstname = id('firstname');
let lastname = id('lastname');
let username = id('username');
let email = id('email');
let password = id('password');
let form = id('form');
let errorMsg = className('error');
let successIcon = className('success-icon');
let failureIcon = className('failure-icon');

// Add event listeners to the form
form.addEventListener('submit', function (e) {
    e.preventDefault();
    validate(firstname, 0, "First name is required");
    validate(lastname, 1, "Last name is required");
    validate(username, 2, "Username is required");
    validate(email, 3, "Email is required");
    validate(password, 4, "Password is required");
});

// Create a function named validate to validate the form, it will have three arguments. id will target the ID of the input, errors will target the classes(error class, success and failure icons), and errorMsg will target the error message.
// The code below will print a message inside the error class whenever the user submits a blank form, at the same time the failure icon will be displayed. But if the user submits a valid form, the success icon will be displayed.
let validate = function (id, errors, message) {
    if (id.value.trim() === "") {
     errorMsg[errors].innerHTML = message;
     id.style.border = "2px solid red";

     // icons
     failureIcon[errors].style.opacity = "1";
     successIcon[errors].style.opacity = "0";
   } else {
     errorMsg[errors].innerHTML = "";
     id.style.border = "2px solid green";

     // icons
     failureIcon[errors].style.opacity = "0";
     successIcon[errors].style.opacity = "1";
   }
};
    

