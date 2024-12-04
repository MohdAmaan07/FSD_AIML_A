import React, { useState, useRef } from 'react';
const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState([]);
    const timerRef = useRef(null);

    const start = () => {
        if (!isRunning) {
            setIsRunning(true);
            timerRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
    };

    const pause = () => {
        if (isRunning) {
            clearInterval(timerRef.current);
            setIsRunning(false);
        }
    };

    const resume = () => {
        if (!isRunning) {
            setIsRunning(true);
            timerRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
    };

    const stop = () => {
        clearInterval(timerRef.current);
        setIsRunning(false);
    };

    const reset = () => {
        clearInterval(timerRef.current);
        setIsRunning(false);
        setTime(0);
        setLaps([]);
    };

    const lap = () => {
        if (isRunning) {
            setLaps([...laps, time]);
        }
    };

    const formatTime = (time) => {
        const getSeconds = `0${time % 60}`.slice(-2);
        const minutes = Math.floor(time / 60);
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

        return `${getHours}:${getMinutes}:${getSeconds}`;
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>{formatTime(time)}</p>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={lap}>Lap</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
            <ul>
                {laps.map((lapTime, index) => (
                    <li key={index}>Lap {index + 1}: {formatTime(lapTime)}</li>
                ))}
            </ul>
        </div>
    );
};

export default Stopwatch;