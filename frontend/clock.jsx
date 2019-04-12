import React, { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(interval)
    }, [time])

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    return (
        <h1>
            <p>{hours}</p>
            <p>{minutes}</p>
            <p>{seconds}</p>
        </h1>
    );
}

export default Clock;