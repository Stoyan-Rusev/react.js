import { useState } from "react";

export default function () {
    let [time, setTime] = useState(0);

    setTimeout(() => {
        // Incorrect:
        time++;
    }, 1000)

    return (
        <>
            <div>
                <h2>Broken Timer</h2>
                <p>{time}</p>
                <hr />
            </div>
        </>
    );
}