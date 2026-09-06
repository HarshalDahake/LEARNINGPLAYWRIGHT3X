interface StringDictionary {
    [key: string]: string;
}

const dict: StringDictionary = {
    hello: "world",
    foo: "bar"
};

console.log(dict.hello);
console.log(dict.foo);