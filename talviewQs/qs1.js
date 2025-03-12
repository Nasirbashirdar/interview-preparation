function performOperations(numberStr, operatorStr) {
  let numbers = numberStr.split(" ").map(Number);
  let operators = operatorStr.split(" ");

  if (operators.length !== numbers.length - 1) {
    console.log("INVALID");
    return;
  }

  let result = numbers[0];

  for (let i = 0; i < operators.length; i++) {
    let op = operators[i];
    let num = numbers[i + 1];

    switch (op) {
      case "a":
      case "p": // addition
        result += num;
        break;
      case "s": // subtraction
        result -= num;
        break;
      case "m": // multiplication
        result *= num;
        break;
      // case "d": // division
      //   if (num === 0) {
      //     console.log("INVALID");
      //     return;
      //   }
      //   result /= num;
      //   break;
      // case "p": // power
      //   result = Math.pow(result, num);
      //   break;
      default:
        console.log("INVALID");
        return;
    }
  }
  console.log(result);
}

const numberStr = "5 3 2 4";
const operatorStr = "p s m";

performOperations(numberStr, operatorStr);
