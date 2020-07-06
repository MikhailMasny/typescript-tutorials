class SimpleClass {
    prop1 : string;
    prop2 : number;
    prop3 : number[];
}

let sc = new SimpleClass();
sc.prop1 = 'text';
sc.prop2 = 123;
sc.prop3 = [1, 2, 3];

class TypeScript {
    version: string;
    public publicProp: string;
    private privateProp: string;
    protected protectedProp: number;
    readonly readonlyProp: number;

    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `[${name}]: TypeScript version is ${this.version}`;
    }
}



// Using modifiers 'readonly' in a class.
// class SomeClass {
//   readonly prop1: string
//   readonly prop2: string = "123ABC"
//
//   constructor(prop1: string) {
//     this.prop1 = prop1;
//   }
// }

class SomeClass {
    readonly prop1: string = "123ABC"
    constructor(readonly prop2: string) {}
}



// Using access modifiers in a class.
class MyClass {
    protected prop1: string = "";
    public prop2: number = 1;

    constructor() {
        this.firstFunc();
    }

    private firstFunc() {
        console.log("Some text here");
    }
}

class MyExtendedClass extends MyClass {
    public secondFunc(prop1: string): void {
        this.prop1 = prop1;
    }
}

const test = new MyExtendedClass();
test.secondFunc("test");
console.log(test.prop2);


// Using abstract classes.
abstract class MyAbstractClass {
    abstract firstFunc(): void;
    abstract secondFunc(str: string): string;
}

class TestAbstractClass extends MyAbstractClass {
    firstFunc() {
        console.log("Some text here");
    }

    secondFunc(str: string) {
        return str;
    }
}
