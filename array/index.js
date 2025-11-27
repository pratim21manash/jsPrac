// var x = [6 , 'manash', "kashyap"]


// var x = []
// x[0] = 1;
// x[1] = "manash";
// x[2] = "Kashyap"
// window.alert(x)


var btn = document.getElementById("btn");

btn.onclick = function(){
    var user_input = [];
    user_input[0] = document.getElementById("user").value;  // use .value
    window.alert(user_input)
}
