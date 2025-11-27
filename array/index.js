// var x = [6 , 'manash', "kashyap"]


// var x = []
// x[0] = 1;
// x[1] = "manash";
// x[2] = "Kashyap"
// window.alert(x)


// var btn = document.getElementById("btn");

// btn.onclick = function(){
//     var user_input = [];
//     user_input[0] = document.getElementById("user").value;  // use .value
//     window.alert(user_input)
// }


// var btn = document.getElementById("form")
// btn.onsubmit = function() {
//     var user = []
//     user[0] = document.getElementById("username").value;
//     user[1] = document.getElementById("password").value;

//     if(user[0] === "ram"){
//         if(user[1] === "1234")
//             {window.alert("login success")}
//         else{window.alert("Wrong Password")}
//     }else {
//         window.alert("User not found")
//     }
// }




var frm = document.getElementById("form")
frm.onsubmit = function(){
    var user = {firstname, lastname, result}

    user.firstname = document.getElementById("firstname").value;
    user.lastname = document.getElementById("lastname").value;
    user.result = document.getElementById("result")

    user.result.innerHTML = user.firstname + " " + user.lastname;

    return false
}