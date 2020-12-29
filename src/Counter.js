import React from 'react';
import { useCounter } from './hooks/customHooks';


export default function Counter() {
    const [count, increment, decrement] = useCounter(0)

    return (
    <div>
        <h1>COUNT</h1>
        <p>The current count is: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
    )
}