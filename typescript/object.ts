let anyObject: any = {
    prop1: 'text',
    prop2: 111,
};

anyObject = 122;
anyObject = 'helloworld';

let typeObject: { prop1: string, prop2: number } = {
    prop1: 'text',
    prop2: 333,
};

// Error
// typeObject.prop1 = 123; 

typeObject.prop1 = 'new text';

type Person = {
    name: string | null,
    age: number,
    fullName?: string,
    gretting?: () => string,
};

let personObject: Person = {
    name: 'text',
    age: 1,
}

let personNullObject: Person = {
    name: null,
    age: 1,
}
