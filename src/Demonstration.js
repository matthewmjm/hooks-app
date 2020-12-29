import React from 'react';
import { useCounter } from './hooks/customHooks';

export default function Demonstration() {
    const [count, , decrement] = useCounter(0)
    return (
        <div>
            <h2>This is a demonstration</h2>
            <h3>This component was mounted {count} seconds ago.</h3>
            <button onClick={decrement}> - </button>
        </div>
    )
}