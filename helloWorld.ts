let message: string = "Hello World";
console.log(message + 1);

let counterrrr: number = 2;
counterrrr = counterrrr + 100;
console.log(counterrrr);

function foo(val: string) {
  const _val = val + "**";
  setTimeout(() => {
    console.log(_val);
  }, 5000);
}

foo(message + counterrrr);

let data: Array<string> = ["a", "b", "c"];
console.log("data", data);

function arrayHandler() {
  data.forEach((item, i) => console.log(i, " ", item));
}

arrayHandler();
