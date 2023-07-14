var powerOfTen = {
    0: 1,
    1: 10,
    2: 100,
    3: 1000,
    4: 10000,
    5: 100000,
    6: 1000000,
    7: 10000000,
    8: 100000000,
    9: 1000000000,
    10: 10000000000
  },
  precisionDelta = 1 + Math.pow(2, -52);


function isFloat(value) {
  return /^-?\d*\.?\d*$/.test(value);
}

function isPositiveFloat(value) {
  return /^\d*\.?\d*$/.test(value);
}

function isPositiveInt(value) {
  return /^[1-9]\d*$/.test(value);
}


function ceilTo(number, digit) {
  return Math.ceil((number * powerOfTen[digit]) / precisionDelta) / powerOfTen[digit];
}

function floorTo(number, digit) {
  return Math.floor(number * powerOfTen[digit] * precisionDelta) / powerOfTen[digit];
}
