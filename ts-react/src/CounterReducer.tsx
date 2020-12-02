import React, { useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

function reducer(state: number, action: Action): number {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            throw new Error('Unhandled Action Type');
    }
}

export default function CounterReducer() {
    const [count, dispatch] = useReducer(reducer, 0); // Generic 생략해도 상관없음
    const onIncrease = () => dispatch({ type: 'INCREASE' });
    const onDecrease = () => dispatch({ type: 'DECREASE' });

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>Increase</button>
            <button onClick={onDecrease}>Decrease</button>
        </div>
    );
}
