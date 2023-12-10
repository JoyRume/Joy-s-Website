
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

function testResults (form) {
    var inputValue = form.inputbox.value;
    alert ("You typed: " + inputValue);
}

function validateEmailAddress(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }
    function validate() {
    $("#result").text("");
    var emailaddress = $("#email").val();
    if (validateEmailAddress(emailaddress)) {
    $("#result").text(emailaddress + " is valid :)");
    $("#result").css("color", "green");
    } else {
    $("#result").text(emailaddress + " is not correct, please retry:(");
    $("#result").css("color", "red");
    }
    return false;
    }
    $("#validate").bind("click", validate);

    let loginForm = document.getElementById("loginForm");



