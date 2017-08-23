const mathMod = {
  add : add,
  sub : sub,
  multi : multi,
  divide : divide,
  mod : mod,
  exp : exp
};

function add (num1, num2) {
  return num1 + num2;
}

function sub (num1, num2) {
  return num1 - num2;
}

function multi (num1, num2) {
  return num1 * num2;
}

function divide (num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return 'Dividing by 0 ends the universe, not allowed!';
  }
}

function mod (num1, num2) {
  if (num2 !== 0) {
    return num1 % num2;
  } else {
    return 'Dividing by 0 ends the universe, not allowed!';
  }
}

function exp (num1, num2) {
  return Math.pow(num1, num2);
}

module.exports = mathModule;
