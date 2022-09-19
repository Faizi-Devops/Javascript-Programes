var con = "";
var Hello = function (a) {
    var b = a;
    for (var i = b.length - 1; i >= 0; i--) {
        con = con + b[i];
    }
    if (a == con) {
        return ("The string is palindrome");
    }
    else {
        return ("The string is not palindrome");
    }
};
Hello("202");
