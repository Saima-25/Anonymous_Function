// syntax let abc =function(){}
var sq_no = function (a) {
    var b = a * a;
    console.log(b);
};
sq_no(4);
var table = function (b) {
    for (var i = 1; i <= 10; i++) {
        var c = b * i;
        console.log(b + " " + "X" + " " + i + " " + "=" + " " + c);
    }
};
table(7);
table(5);
