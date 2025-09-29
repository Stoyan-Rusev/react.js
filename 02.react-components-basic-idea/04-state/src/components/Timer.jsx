import { useState } from "react";

export default function Timer() {
    let [time, setTime] = useState(0);

    setTimeout(() => {
        setTime(time + 1);
    }, 1000);

    return (
        <>
            <div>
                <h2>Timer</h2>
                <p>{time}</p>
                <hr />
            </div>
        </>
    );
}
