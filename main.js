//-------------------------------------------Equality function---------------------------------------------
console.log("------------Equality function--------------");
function equal(a, b) {
  if (typeof a !== typeof b) {
    return "a და b რიცხვის ტიპები განსხვავებულია ერთმანეთისგან";
  } else if (a === b) {
    return "ტოლია";
  } else {
    return "არ არის ტოლი";
  }
}

console.log(equal("10", 10)); //a და b რიცხვის ტიპები განსხვავებულია ერთმანეთისგან
console.log(equal(10, 10)); //ტოლია
console.log(equal(100, 10)); //არ არის ტოლი

//-------------------------------------------convert Fahrenheit in Celsius---------------------------------------------
console.log("-------------convert Fahrenheit in Celsius--------------");

function temperature(tempFahrenheit) {
  if (typeof tempFahrenheit === "number") {
    return (tempFahrenheit - 32) * (5 / 9);
  } else {
    return false;
  }
}

console.log(temperature(50)); //10
console.log(temperature("50")); //false

//-------------------------------------------operation function---------------------------------------------
console.log("------------operation function--------------");

function newValue(a, b, operation) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    (operation !== "+" &&
      operation !== "-" &&
      operation !== "*" &&
      operation !== "/")
  ) {
    return false;
  }
  if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "*") {
    return a * b;
  } else if (operation === "/") {
    return a / b;
  }
}

console.log(newValue(10, 30, "+"));
console.log(newValue(10, 30, "-"));
console.log(newValue(10, 30, "*"));
console.log(newValue(10, 30, "/"));
