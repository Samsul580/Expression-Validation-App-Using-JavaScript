// let emailBtn = document.getElementById("email_btn");
// let phoneBtn = document.getElementById("phone_btn");
let postCodeBtn = document.getElementById("post_code_btn");
let resContainer = document.getElementById("res_container");

postCodeBtn.addEventListener('click', function () {
    let re = /^[0-9]{4}$/;
    let user_input = prompt("Input Post Code!")
    let res = re.test(user_input)

    switch (res) {
        case true:
            resContainer.innerText = "Post Code Valid";
            break;
    
        default:
            resContainer.innerText = "Post Code Invalid";
            break;
    }
})

// Examples
// let re;
// let str;

// Postal Code
// 4700, 4000
// re = /^[0-9]{4}$/;
// str = "40000";

// Phone Number
// 01717888888 +8801717888888 8801717888888
// re = /^(+)?(88)?01[0-9]{9}$/;
// str = "+8801717888888";

// Email Address
// bohubrihi8.learn@edu.com.bd
// re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;
// str = "bohubrihi.learn@edu.com.bd" ;

// console.log(re.test(str)); 
