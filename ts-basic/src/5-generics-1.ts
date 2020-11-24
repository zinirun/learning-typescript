// function merge(a: any, b:any) {
//     return {
//         ...a,
//         ...b,
//     }
// }

// any랑 같지만 generics를 사용하면 사용한 자료형대로 IDE에 보임

function merge<T1, T2>(a: T1, b: T2) {
    return {
        ...a,
        ...b,
    };
}

const merged = merge({ foo: 1 }, { bar: 2, foobar: 3 });

function wrap<T>(param: T) {
    return {
        param,
    };
}

const wrapped = wrap('aaa');
wrapped.param;
