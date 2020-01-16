var message = "Hello World";
console.log(message + 1);
var counterrrr = 2;
counterrrr = counterrrr + 100;
console.log(counterrrr);
function foo(val) {
    var _val = val + "**";
    setTimeout(function () {
        console.log(_val);
    }, 5000);
}
foo(message + counterrrr);
var data = [{ a: 1 }, { b: 2 }, { c: 3 }];
console.log("data", data);
function arrayHandler() {
    data.forEach(function (item, i) { return console.log(i, " ", item); });
}
arrayHandler();
