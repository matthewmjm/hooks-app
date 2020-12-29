import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0)
    return (
    <div>
        <h1>COUNT</h1>
        <p>The current count is: {count}</p>
    </div>
    )
}