const str: string = "Hello world!";
const bool: boolean = true; // false
let integer: number = 123; // 1.23; 1e23
const firstArray: number[] = [1, 2, 3];
const secondArray: Array<number> = [1, 2, 3];
const words: string[] = ["Hello", "TypeScript", "!"];
const typle: [string, number] = ["Hello", 123];

typeof 42;          // "number"
typeof 'str';       // "string"
typeof true;        // "boolean"
typeof [];          // "object"
typeof {};          // "object"
typeof null;        // "object"
typeof undefined;   // "undefined"
typeof Symbol();    // "symbol"

let variable: any = 123;
variable = "123";
variable = [1, 2, 3];

function func(val: string): void {
    console.log(val);
}
func("Hello world!");

function throwError(val: string): never {
    throw new Error(val);
}

function infinite(): never {
    while (true) {

    }
}

type MyType = string;
const myType: MyType = "Hello world!";
// But can't: const myType: MyType = 123;

type AnyType = number | boolean;
const anyOne: AnyType = 1;
const anyTwo: AnyType = true;
// But can't: const anyThree: AnyType = "Hello";

type SomeType = string | null | undefined;
const someType: SomeType = null;
