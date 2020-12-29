import React from 'react';
import { useCounter, useToggler } from './hooks/customHooks';

export default function Demonstration() {
    const [count, , decrement] = useCounter(0)
    const [isToggled, setIsToggled] = useToggler(false)
    return (
        <div>
            <h2>This is a demonstration</h2>
            <h3>This component was mounted {count} seconds ago.</h3>
            <button onClick={decrement}> - </button>
            {isToggled ? <h1>This is Toggled On</h1>  : <h2>This is Toggled Off</h2>}
            <button onClick={() => setIsToggled(!isToggled)}>switch</button>
        </div>
    )
}