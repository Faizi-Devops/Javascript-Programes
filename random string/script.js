var newadd = "";
var Random = function (a) {
    var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
    var c = b.length;
    for (var i = 0; i < a; i++) {
        newadd = newadd + b.charAt(Math.floor(Math.random() * c));
    }
    return newadd;
};
Random(10);
