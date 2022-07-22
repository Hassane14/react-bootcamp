import React, { useEffect, useState, useRef } from 'react'

function Clock(props) {
    const state = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Hassane',
        apellidos: 'El ghafoud'
    };

    const [count, setCount] = useState(0);

    useInterval(() => {
        setCount(count + 1);
    }, 1000);

    return (
        <div>
            <h2>
                Hora Actual:
                {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {count}</h1>
        </div>
    )

    function useInterval(callback, delay) {
        const savedCallback = useRef();

        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                const id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }
}
export default Clock;