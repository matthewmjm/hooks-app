import React, { useState, useEffect } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    useEffect(() => {
        let id = setInterval(() => setCount(count + 1), 1000)
        return () => clearInterval(id)
    }, [count])

    return (
    <div>
        <h1>COUNT</h1>
        <p>The current count is: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
    )
}