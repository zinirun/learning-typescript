// function merge(a: any, b:any) {
//     return {
//         ...a,
//         ...b,
//     }
// }

import { isConstructorDeclaration } from 'typescript';

// any랑 같지만 generics를 사용하면 사용한 자료형대로 IDE에 보임

function merge<T1, T2>(a: T1, b: T2): Object {
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

// Same with T[] = Array<T>
function logText<T>(text: T[]): T[] {
    console.log(text.length);
    return text;
}

interface Avangers {
    name: string;
}

let hero: Avangers;
let capt = { name: 'Captain', location: 'Seoul' };
hero = capt;

function assemble(a: Avangers) {
    console.log('어벤저스 모여라', a.name);
}

interface Dev {
    name: string;
    skill: string;
}

let capt2: Dev;

type Developer = {
    name: string;
    skill: string;
};

let capt3: Developer;

/* 타입, 인터페이스의 차이점은 타입의 확장 가능 여부

인터페이스는 확장이 가능하지만 타입 별칭은 확장 X

가능한 type 보다는 Interface를 사용할 것 */
