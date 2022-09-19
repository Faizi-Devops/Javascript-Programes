var c = "";
var Hello = function (a) {
    var b = a;
    for (var i = b.length - 1; i >= 0; i--) {
        c = c + a[i];
    }
    return c;
};
Hello("I love the Pakitan");
