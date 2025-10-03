import { useEffect, useState } from "react";

export default function Timer() {
    // IF WE WANT TO GET THE ACTUAL SECONDs:
    // const [time, setTime] = useState(() => {
    //     return new Date().getSeconds();
    // })
    const [time, setTime] = useState(0)
    const [isManual, setIsManual] = useState(false);
    

    const addTimeHandler = () => {
        setTime(seconds => seconds + 10);
        setIsManual(true);
    }

    useEffect(() => {
        if (!isManual) {
            setTimeout(() => {
                setTime(seconds => seconds + 1);
                setIsManual(false);
            }, 1000)
        }
    }, [time, isManual]);


    return (
        <>
            <h2>Timer</h2>
            <div>{time}</div>
            <button onClick={addTimeHandler}>Add 10 seconds</button>
        </>
    );
}