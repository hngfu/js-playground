var cal = {};
cal.str = "12+34/53*23";

cal.numCheck = function (str) {
    var chu = Math.min(str.indexOf("+"), str.indexOf("-"), str.indexOf("*"), str.indexOf("/"));
    return chu;
}

cal.priorityCheck = function (str) {
    var operator = ['+', '-', '*', '/'];
    var min = 0;
    for (var i = 0; i < 4; i++){
        if(min < str.indexOf(operator[i])){

        } 
        console.log(compare);
    }
}

cal.priorityCheck(cal.str);