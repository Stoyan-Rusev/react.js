import { useEffect } from "react";
import { useState } from "react";

export default function Input() {
    const [click, setClick] = useState(true);
    const [text, setText] = useState('');

    console.log('Render');

    const buttonClickHandler = () => {
        setClick(prev => !prev);
    }

    useEffect(() => {
        console.log('Mount');

        return () => {
            console.log('Unmount');
        }
    }, []);


    useEffect(() => {
        console.log('Button clicked')
    }, [click]);


    useEffect(() => {
        console.log(`Text changed: ${text}`)
    }, [text]);


    const inputUpdateHandler = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <h1>Use Effect</h1>

            <input type="text" onChange={inputUpdateHandler}/>

            <button onClick={buttonClickHandler}>Update</button>
        </>
    );
}