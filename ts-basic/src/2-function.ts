function sum(x: number, y: number): number {
    return x + y;
}

const result = sum(1, 2);

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

console.log(total);

// 반환 X - void
function returnNothing(): void {
    console.log('hello typescript');
}

function returnStringOrNumber(): string | number {
    return 4;
}
