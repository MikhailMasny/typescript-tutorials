enum SomeEnum {
    Prop1,
    Prop2,
    Prop3
}

const enumMember = SomeEnum.Prop1;
const enumMemberReverse = SomeEnum[0];
console.log(enumMember);
console.log(enumMemberReverse);


// Example of enum.
enum MyEnum {
    Prop1 = "Hello",
    Prop2 = "World",
    Prop3 = "!"
}

console.log(MyEnum.Prop1 + " " + MyEnum.Prop2);
