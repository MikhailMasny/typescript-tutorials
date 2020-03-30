interface SomeInterface {
    readonly prop1: string,
    prop2?: string,
    prop3: {
        prop31: number,
        prop32: number
    }
}

const firstSomeInterface: SomeInterface = {
    prop1: "Hello",
    prop2: "world",
    prop3: {
        prop31: 123,
        prop32: 321
    }
}

const secondSomeInterface: SomeInterface = {
    prop1: "Hello",
    prop3: {
        prop31: 123,
        prop32: 321
    }
}
secondSomeInterface.prop2 = "TypeScript!";
// But can't: secondSomeInterface.prop1 = "Hi";

const thirdSomeInterface = {} as SomeInterface;
const fourthSomeInterface = <SomeInterface>{};



// Interface inheritance.
interface AnotherInterface extends SomeInterface {
    getResult: () => number;
}

const fifthSomeInterface: AnotherInterface = {
    prop1: "Hello",
    prop3: {
        prop31: 123,
        prop32: 321
    },
    getResult(): number {
        return this.prop3.prop31 + this.prop3.prop32;
    }
}



// Class implementation with interface.
interface ITime {
    time: Date,
    setTime(date: Date): void
}

class Time implements ITime {
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date;
    }
}



// Implementation of abstract interfaces.
interface Style {
    [key: string]: string
}

const css: Style = {
    padding: "1px",
    marging: "1px"
}
