// let grade = 90;

// if (grade >= 90) {
//   grade = "A";
// } else if (grade < 90 && grade >= 80) {
//   grade = "B";
// } else if (grade < 80 && grade >= 70) {
//   grade = "C";
// } else if (grade < 60 && grade >= 50) {
//   grade = "D";
// } else {
//   grade = "F";
// }

// const callback = function () {};

const receivesAFunction = function (callback) {
  callback();
};

const returnsANamedFunction = function () {
  return function named() {};
};

const returnsAnAnonymousFunction = function () {
  return function () {};
};
