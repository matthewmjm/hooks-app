import React, { useState, useEffect } from 'react';

export const useCounter = (initialCount) => {
    const [count, setCount] = useState(initialCount)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    useEffect(() => {
        let id = setInterval(() => setCount(count + 1), 1000)
        return () => clearInterval(id)
    }, [count])

    return [count, increment, decrement]
}

export const useToggler = (initialState) => {
    const [isToggled, setIsToggled] = useState(initialState)
    return [isToggled, setIsToggled]
}