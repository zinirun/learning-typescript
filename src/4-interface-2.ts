// interface Person {
//     name: string;
//     age?: number;
// }

// interface Developer extends Person {
//     skills: string[];
// }

// Type Alias (별칭) - interface랑 같지만 interface에서 못하는 것을 할 수 있음

type Person = {
    name: string;
    age?: number;
}

type Developer = Person & {
    skills: string[];
}

const person: Person = {
    name: 'zini',
    age: 20,
}

const expert: Developer = {
    name: 'zini',
    age: 20,
    skills: ['javascript', 'typescript']
}

type People = Person[];

const people: People = [person, expert];


type Color = 'red' | 'green' | 'yellow';
const color: Color = 'red';