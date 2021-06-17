// using bind
const multiply = function(x, y) {
  console.log(x * y);
};
multiply(2, 5);

const multiplyBy2 = multiply.bind(this, 2);
multiplyBy2(10);

const multiplyBy3 = multiply.bind(this, 3);
multiplyBy3(5);

// using closure
const add = function(x) {
  return function(y) {
    console.log(x + y);
  };
};

const addBy2 = add(2);
addBy2(10);

const addBy3 = add(3);
addBy3(10);

// More nested curring
const nestedAdd = function(x) {
  return function(y) {
    return function(z) {
      console.log(x + y + z);
    };
  };
};

nestedAdd(1)(2)(3);

const nestedAddby1 = nestedAdd(1);
nestedAddby1(2)(3);

const nestedAddby1and2 = nestedAdd(1)(2);
nestedAddby1and2(3);

// using Arrow Functions
const sum = a => b => c => {
  console.log(a + b + c);
};
sum(1)(2)(3);
