let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let nameField = document.getElementById("field");


signupbtn.style.background = "orangered";

signinbtn.onclick = function () {
    nameField.style.maxHeight = "0";
    signupbtn.style.background = "white";
    signinbtn.style.background = "orangered";
};

signupbtn.onclick = function () {
    nameField.style.maxHeight = "60px";
    signinbtn.style.background = "white";
    signupbtn.style.background = "orangered";
};
