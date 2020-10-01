const evaluate = (str) => {
  const operator = str[1];
  switch (operator) {
    case "+":
      return (left, right) => left+right;
      break;
    case "-":
      return (left, right) => left - right;
      break;
    case "*":
      return (left, right) => left * right;
      break;
    case "/":
      return (left, right) => left / right;
      break;
    case "^":
      return (left, right) => left**right;
      break;
    case "%":
      return (left, right) => left % right;
      break;
  }
};

//const expression = "8%3";
//let operator = evaluate(expression);
//console.log(expression + ' = ' + operator(parseInt(expression[0]), parseInt(expression[2])));



module.exports = { evaluate };
