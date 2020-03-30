function func(a1: number, a2: number): number {
    return a1 + a2;
}



// Function parameter overload.
interface ICoordinates {
    x: number | undefined,
    y: number | undefined
}

interface ICoordinatesDefault extends ICoordinates {
    default: string
}

function coord(): ICoordinates;
function coord(a1: number): ICoordinatesDefault;
function coord(a1: number, a2: number): ICoordinates;

function coord(a1?: number, a2?: number) {
    if (!a1 && !a2) {
        return { x: undefined, y: undefined }
    }

    if (a1 && !a2) {
        return { x: a1, y: undefined, default: a1.toString() }
    }

    return { x: a1, y: a2 }
}

console.log("Empty: ", coord());
console.log("One param: ", coord(1));
console.log("Two params: ", coord(1, 2));
