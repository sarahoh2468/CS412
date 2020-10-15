const doOperation = (value, operation) => operation(value);

const decoratedValue = doOperation(
  "supercalifragilisticexpialidocious",
  (value) => {
    let result = value.split("c");
    for (let i = 1; i < result.length; i++) {
      result[i] = "c" + result[i];
    }
    return result;
  }
);

const anotherDecoratedValue = doOperation(
  "supercalifragilisticexpialidocious",
  (value) => {
    let modifiedString = "";
    let numberReplaced = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] == "a") {
        modifiedString = modifiedString + "A";
        numberReplaced++;
      } else {
        modifiedString = modifiedString + value[i];
      }
    }
    let length = value.length;
    return { originalString: value, modifiedString, numberReplaced, length };
  }
);

//console.log(decoratedValue);
//console.table(anotherDecoratedValue);

module.exports = { doOperation };
