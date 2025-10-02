import { useState } from "react";

export default function Counter() {
    let [count, increaseCount] = useState(0);

    const countClickHandler = () => {
        increaseCount(prev => prev + 1);
    }

    return (
        <>
            <div>
                <h2>Counter</h2>
                <p>{count}</p>
                <button onClick={countClickHandler}>+</button>
                <hr />
            </div>
        </>
    );

}
