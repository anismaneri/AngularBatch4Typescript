function doubleMe(x) {
    // checking input parameter as number or not
    if (x && typeof x === "number") {
        console.log(x * 2);
    }
    // checking input para as string or not
    else if (x && typeof x === "string") {
        console.log(x + " " + x);
    }
    else if (Array.isArray(x)) {
        return x.map(function (name) { return console.log(name); });
    }
}
doubleMe(2); // calling function
doubleMe("John");
doubleMe(["codemind", "tet"]);
var product = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var result = 1;
    for (var i = 0; i < num.length; i++) {
        console.log(num[i]);
        result *= num[i];
    }
    return result;
};
console.log(product(2, 3, 4, 5));
var hello = function (name) {
    return "Hello" + name;
};
console.log(hello("AngularBatch4"));
var multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply(2, 7));
