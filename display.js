const sense = require("sense-hat-led");

// const sleep = sense.sync.sleep;

// let t = 1;

// sense.sync.clear();
// sense.sync.setRotation(0);

const X = [64, 64, 64]; // white
const O = [0, 0, 0]; // black
const B = [0, 0, 64]; // blue

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

const expect = [
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

const grid = Array(64).fill(O);

const firstChar = (input) =>
  grid.map((val, index) => (input[index] ? input[index] : O));

const secondChar = (input) =>
  grid.map((val, index) =>
    index > 4 && input[index - 5] ? input[index - 5] : O
  );

const neg = grid.map((val, index) => (index === 48 || index === 49 ? X : O));

const rain = grid.map((val, index) =>
  index === 54 || index === 55 || index === 62 || index === 63 ? B : O
);

const dec = grid.map((val, index) => (index === 44 ? X : O));

const merge = (arr1, arr2) =>
  arr1.map((val, index) =>
    val !== O ? val : arr2[index] !== O ? arr2[index] : O
  );

// const test = (arr1, arr2) =>
//   arr1.every((val, index) => val === arr2[index]) ? "pass" : "fail";

// const allChars = merge(
//   merge(merge(firstChar(num[8]), secondChar(num[8])), merge(neg, rain)),
//   dec
// );

const display = (temp, rain = false) => {
  const isRain = rain;
  const isNeg = temp < 0;
  const tempStr = temp.toString().replace("-", "");
  console.log(tempStr);
  const whole = tempStr.split(".");
  const isDec = tempStr.includes(".") && whole[0].length === 1;
  const firstDig = whole[0] > 1 ? whole[0][0] : whole[0];
  const secondDig = whole[0].length > 1 ? whole[0][1] : whole[1];
  return {
    isRain,
    isNeg,
    isDec,
    firstDig: parseInt(firstDig),
    secondDig: parseInt(secondDig),
  };
};

const pixels = (options) => {
  const { isRain, isNeg, isDec, firstDig, secondDig } = options;
  const withNeg = isNeg ? neg : grid;
  const withRain = isRain ? rain : grid;
  const withDec = isDec ? dec : grid;
  return merge(
    merge(
      merge(firstChar(num[firstDig]), secondChar(num[secondDig])),
      merge(withNeg, withRain)
    ),
    withDec
  );
};

sense.sync.setPixels(pixels(display(-8.8, true)));
// sleep(t);
// sense.sync.clear();

