import React, {useState} from 'react';

export default function Counter() {
    const [count, setCount] = useState(0); // Generic 생략해도 상관없음
    const onIncrease = () => setCount(count+1);
    const onDecrease = () => setCount(count-1);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>Increase</button>
            <button onClick={onDecrease}>Decrease</button>
        </div>
    )
}