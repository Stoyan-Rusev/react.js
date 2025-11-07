import { useEffect, useRef, useState } from "react";

export default function UseRef() {
    const [count, setCount] = useState((0));
    const firstRender = useRef(true);

    const clickHandler = (e) => {
        setCount(prevCount => prevCount + 1);
    }

    useEffect(() => {
        if (firstRender.current) {
            console.log('First render');
            firstRender.current = false;
        };

        console.log(`Count: ${count}`);
        
    }, [count]);

    console.log('Rendering...');
    

    return (
        <>
            <h2>useRef()</h2>
            
            <p>
                COUNT: {count}  
                <button onClick={clickHandler}>+</button>
            </p>
        </>
    );
};