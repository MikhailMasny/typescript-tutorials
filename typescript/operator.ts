interface IKey {
    prop1: string;
    prop2: number;
}

type MyKeys = keyof IKey; // "prop1" | "prop2"

let key: MyKeys = "prop1";
key = "prop2";
// But can't: key = "prop3";

type MyKeyType = {
    _id: number;
    prop1: string;
    prop2: Date;
}

type KeyNoMetaOne = Exclude<keyof MyKeyType, "_id" | "prop2">; // "prop1"
type KeyNoMetaTwo = Pick<MyKeyType, "_id" | "prop2">; // "_id" , "prop2"

let f1: KeyNoMetaOne = "prop1";
// But can't: "_id" or "prop2";
