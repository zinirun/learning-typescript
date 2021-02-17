interface StringArray {
    [index: number]: string;
}

const arr: StringArray = ['Thor', 'Hulk'];
arr[0];

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

const arr2: ReadonlyStringArray = ['Thor', 'Hulk'];
arr[2] = 'Thor';
