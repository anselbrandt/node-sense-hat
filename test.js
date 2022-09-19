const X = [155, 155, 155]; // white
const O = [0, 0, 0]; // black
const B = [0, 0, 155]; // blue

const num = [
  [
    X,
    X,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    X,
    X,
  ],
  [
    O,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    O,
    O,
    X,
  ],
  [
    X,
    X,
    X,
    O,
    O,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    X,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    O,
    O,
    X,
    X,
    X,
  ],
  [
    X,
    X,
    X,
    O,
    O,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    X,
    X,
    O,
    O,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    X,
    X,
  ],
  [
    X,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    X,
    X,
    O,
    O,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    O,
    O,
    X,
  ],
  [
    X,
    X,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    O,
    O,
    X,
    X,
    X,
    O,
    O,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    X,
    X,
  ],
  [
    X,
    X,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    O,
    O,
    X,
    X,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    X,
    X,
  ],
  [
    X,
    X,
    X,
    O,
    O,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    O,
    O,
    X,
  ],
  [
    X,
    X,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    X,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    X,
    X,
  ],
  [
    X,
    X,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    X,
    X,
    O,
    O,
    O,
    O,
    O,
    O,
    O,
    X,
    O,
    O,
    O,
    O,
    O,
    X,
    X,
    X,
  ],
];

//displays 8
const expect1 = [
  X,
  X,
  X,
  O,
  O,
  O,
  O,
  O,
  X,
  O,
  X,
  O,
  O,
  O,
  O,
  O,
  X,
  X,
  X,
  O,
  O,
  O,
  O,
  O,
  X,
  O,
  X,
  O,
  O,
  O,
  O,
  O,
  X,
  X,
  X,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
];

// displays ' '8
const expect2 = [
  O,
  O,
  O,
  O,
  O,
  X,
  X,
  X,
  O,
  O,
  O,
  O,
  O,
  X,
  O,
  X,
  O,
  O,
  O,
  O,
  O,
  X,
  X,
  X,
  O,
  O,
  O,
  O,
  O,
  X,
  O,
  X,
  O,
  O,
  O,
  O,
  O,
  X,
  X,
  X,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
];

// displays 8 8
const expect3 = [
  X,
  X,
  X,
  O,
  O,
  X,
  X,
  X,
  X,
  O,
  X,
  O,
  O,
  X,
  O,
  X,
  X,
  X,
  X,
  O,
  O,
  X,
  X,
  X,
  X,
  O,
  X,
  O,
  O,
  X,
  O,
  X,
  X,
  X,
  X,
  O,
  O,
  X,
  X,
  X,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
];

// displays 8.8
//          - o
const expect4 = [
  X,
  X,
  X,
  O,
  O,
  X,
  X,
  X,
  X,
  O,
  X,
  O,
  O,
  X,
  O,
  X,
  X,
  X,
  X,
  O,
  O,
  X,
  X,
  X,
  X,
  O,
  X,
  O,
  O,
  X,
  O,
  X,
  X,
  X,
  X,
  O,
  O,
  X,
  X,
  X,
  O,
  O,
  O,
  O,
  X,
  O,
  O,
  O,
  X,
  X,
  O,
  O,
  O,
  O,
  B,
  B,
  O,
  O,
  O,
  O,
  O,
  O,
  B,
  B,
];

const expectNeg = [
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  X,
  X,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
];

const expectRain = [
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  B,
  B,
  O,
  O,
  O,
  O,
  O,
  O,
  B,
  B,
];

const expectDec = [
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  X,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
  O,
];

const grid = Array(64).fill(O);

const firstChar = (input) =>
  grid.map((val, index) => (input[index] ? input[index] : O));

const secondChar = (input) =>
  grid.map((val, index) =>
    index > 4 && input[index - 5] ? input[index - 5] : O
  );

// const neg = [48, 49];
const neg = grid.map((val, index) => (index === 48 || index === 49 ? X : O));

// const rain = [54, 55, 62, 63];
const rain = grid.map((val, index) =>
  index === 54 || index === 55 || index === 62 || index === 63 ? B : O
);

const dec = grid.map((val, index) => (index === 44 ? X : O));

const merge = (arr1, arr2) =>
  arr1.map((val, index) =>
    val !== O ? val : arr2[index] !== O ? arr2[index] : O
  );

const test = (arr1, arr2) =>
  arr1.every((val, index) => val === arr2[index]) ? "pass" : "fail";

// expect1 8
// expect2 ' '8
// expect3 8 8
// expect4 8.8
//          - o

const allChars = merge(
  merge(merge(firstChar(num[8]), secondChar(num[8])), merge(neg, rain)),
  dec
);

console.log("8   ", test(firstChar(num[8]), expect1));
console.log(" 8  ", test(secondChar(num[8]), expect2));
console.log(
  "88  ",
  test(merge(firstChar(num[8]), secondChar(num[8])), expect3)
);
console.log("neg ", test(neg, expectNeg));
console.log("rain", test(rain, expectRain));
console.log("dec ", test(dec, expectDec));
console.log("all ", test(allChars, expect4));

