const { reverse } = require("./PS1.P1");
const { evaluate }  = require("./PS1.P2");
const { doOperation } = require("./PS1.P3");

const { describe, it } = require("mocha");
const { expect } = require("chai");

describe("P1 test", () => {
  it("should return 'suoicodilaipxecitsiligarfilarepus' when passed 'supercalifragilisticexpialidocious'", () => {
    let test = reverse("supercalifragilisticexpialidocious");
    expect(test).to.be.equal("suoicodilaipxecitsiligarfilacrepus");
  });
  it("should return 'supercalifragilisticexpialidocious' when passed 'suoicodilaipxecitsiligarfilarepus'", () => {
    let test = reverse("suoicodilaipxecitsiligarfilacrepus");
    expect(test).to.be.equal("supercalifragilisticexpialidocious");
  });
  it ("should return a String type", () => {
    let test = reverse("supercalifragilisticexpialidocious");
    expect(test).to.be.a('string');
  })

  it("should return 'o ll 9 e   h' when passed 'h    e 9 ll o'", () => {
    let test = reverse("h    e 9 ll o");
    expect(test).to.be.equal("o ll 9 e    h");
  });
});

describe("P2 test", () => {
  it("should return 2 when passed '8%3'", () => {
    const expression = "8%3";
    let operator = evaluate(expression);
    let test = operator(parseInt(expression[0]), parseInt(expression[2]));
    expect(test).to.be.equal(2)
  });

  it("should return 6 when passed '4+2'", () => {
    const expression = "4+2";
    let operator = evaluate(expression);
    let test = operator(parseInt(expression[0]), parseInt(expression[2]));
    expect(test).to.be.equal(6)
  });

  it("should return 35 when passed '5*7'", () => {
    const expression = "5*7";
    let operator = evaluate(expression);
    let test = operator(parseInt(expression[0]), parseInt(expression[2]));
    expect(test).to.be.equal(35)
  });

  it("should return 5 when passed '6-1'", () => {
    const expression = "6-1";
    let operator = evaluate(expression);
    let test = operator(parseInt(expression[0]), parseInt(expression[2]));
    expect(test).to.be.equal(5)
  });

  it("should return 4.5 when passed '9/2'", () => {
    const expression = "9/2";
    let operator = evaluate(expression);
    let test = operator(parseInt(expression[0]), parseInt(expression[2]));
    expect(test).to.be.equal(4.5)
  });

  it("should return 64 when passed '2^8'", () => {
    const expression = "2^8";
    let operator = evaluate(expression);
    let test = operator(parseInt(expression[0]), parseInt(expression[2]));
    expect(test).to.be.equal(256)
  });

  describe("P3 test", () => {
    it("should return [‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’] when passed 'supercalifragilisticexpialidocious'", () => {
      let decoratedValue = doOperation(
          "supercalifragilisticexpialidocious",
          (value) => {
            let result = value.split("c");
            for (let i = 1; i < result.length; i++) {
              result[i] = "c" + result[i];
            }
            return result;
          }
      );
      expect(decoratedValue).eql([ 'super', 'califragilisti', 'cexpialido', 'cious' ]);
    });

    it ("should return {originalString: modifiedString: numberReplaced: length: } when passed 'supercalifragilisticexpialidocious'", () => {
      let anotherDecoratedValue = doOperation(
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
      expect(anotherDecoratedValue).to.have.property('originalString');
      expect(anotherDecoratedValue).to.have.property('modifiedString');
      expect(anotherDecoratedValue).to.have.property('numberReplaced');
      expect(anotherDecoratedValue).to.have.property('length');

      expect(anotherDecoratedValue.originalString).to.be.equal('supercalifragilisticexpialidocious');
      expect(anotherDecoratedValue.modifiedString).to.be.equal('supercAlifrAgilisticexpiAlidocious');
      expect(anotherDecoratedValue.numberReplaced).to.be.equal(3);
      expect(anotherDecoratedValue.length).to.be.equal(34);
    })

  });
});

