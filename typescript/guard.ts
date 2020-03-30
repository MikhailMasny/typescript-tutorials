function ex(x: number | boolean) {
    if (typeof x === "number") {
        return x.toFixed(123);
    }

    return x;
  }

class MyFirstClass {
    prop1 = "One";
    prop2 = "Two";
}

class MySecondClass {
    prop1 = "Three";
    prop2 = "Four";
}

function test(result: MyFirstClass | MySecondClass): object {
    if (result instanceof MyFirstClass) {
        return {
            messageOne: result.prop1 + result.prop2
        }
    } else {
        return {
            messageTwo: result.prop2 + result.prop1
        }
    }
}



type TestType = "valueOne" | "valueTwo" | "valueThree";

function setAlertType(type: TestType) {
  // some implementation here
}

setAlertType("valueOne");
setAlertType("valueTwo");
// But can't: setAlertType("default")
