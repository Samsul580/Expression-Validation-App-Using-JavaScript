let emailBtn = document.getElementById("email_btn");
let phoneBtn = document.getElementById("phone_btn");
let postCodeBtn = document.getElementById("post_code_btn");

let resContainer = document.getElementById("res_container");

// Phone number validation check function
phoneBtn.addEventListener('click',function () {
    let re = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
    let user_input = prompt("Input phone number");
    let res = re.test(user_input);
    if (user_input == null || user_input == "") {
        alert("Please input a phone number!");
    } else {
        switch (res) {
            case true:
                resContainer.innerText = "Phone number is Valid";
                break;
        
            default:
                resContainer.innerText = "Phone number is Invalid";
                break;
        }
    }
})

// Email validation check function
emailBtn.addEventListener('click', function () {
    let re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;
    let user_input = prompt("Input Email Address");
    let res = re.test(user_input);
    if (user_input == null || user_input == "") {
        alert("Please input a email address!");
    } else {
        switch (res) {
            case true:
                resContainer.innerText = "Email Address is Valid";
                break;
        
            default:
                resContainer.innerText = "Email Address is Invalid";
                break;
        }
    }
})

// Post Code validation check function
postCodeBtn.addEventListener('click', function () {
    let re = /^[0-9]{4}$/;
    let user_input = prompt("Input Post Code!");
    let res = re.test(user_input);

    if (user_input == null || user_input == "") {
        alert("Please input a post code!");
    } else {
        switch (res) {
            case true:
                resContainer.innerText = "Post Code is Valid";
                break;
        
            default:
                resContainer.innerText = "Post Code is Invalid";
                break;
        }
    }
})
