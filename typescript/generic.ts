const arrayOne: Array<number> = [1, 2, 3];
const arrayTwo: Array<string> = ["One", "Two", "Three"];

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

reverse(arrayOne);
reverse(arrayTwo);
