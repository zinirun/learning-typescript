type CompareTwoWithSameType = {
    <T>(objOne: T, objTwo: T): boolean;
};

type CompareManyWithSameType = {
    <T>(...args: T[]): boolean;
};

type Logger = {
    (...args: any): void;
};

const is: CompareManyWithSameType = (...obj) => {
    let compareFlag = true;
    for (let o of obj) {
        if (o !== obj[0]) {
            compareFlag = false;
            break;
        }
    }
    return compareFlag;
};

const log: Logger = (...args) => {
    console.log(`[${new Date().toLocaleString()}] ${args}`);
};

log(is(true, false));
log(is([1], [1, 2], [1, 2, 3]));
