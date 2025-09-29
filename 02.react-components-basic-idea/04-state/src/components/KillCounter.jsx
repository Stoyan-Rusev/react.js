import { useState } from "react";

export default function KillCounter() {
    let [count, setCount] = useState(0);
    let status = 'Kill Counter';
    let isMax = count == 9;

    const incrementClickHandler = () => {
        setCount(count + 1);
    }
    const decrementClickHandler = () => {
        setCount(count - 1);
    }
    
    switch (count) {
        case 1:
            status = 'First Kill!';
            break;
        case 2:
            status = 'Double Kill';
            break;
        case 3:
            status = 'Triple Kill';
            break;
    }

    if (count == 10) {
        return <h1>GodLike</h1>;
    } else if (count > 3) {
        status = 'Unstopabble';
    }

    return (
        <>
            <div>
                <h2>{status}</h2>
                <p>{count}</p>
                <button onClick={incrementClickHandler}>+</button>
                {count > 6 ? <button onClick={decrementClickHandler}>-</button> : <p>COME ON</p>}
                {isMax && <p>ONE MORE</p>}
                <hr />
            </div>
        </>
    );
}