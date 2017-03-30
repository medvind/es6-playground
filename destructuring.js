
let myFunc = (data) => {
    let { color, flavor } = data;
    console.log(`myFunc says: The color is "${color}"`);
}

let myFunc2 = ({color, flavor}) => {
    console.log(`myFunc2 says: The flavor is "${flavor}"`);
};

let data = {
    color: 'red',
    flavor: 'sour',
    shape: 'triangle'
};

myFunc(data);
myFunc2(data);

let myFunc3 = (data) => {
    let [ one, two, three ] = data;
    console.log(`myFunc3 says: Number two is "${two}"`);
};

let data2 = ['some', 'thing', 'here'];
myFunc3(data2);
