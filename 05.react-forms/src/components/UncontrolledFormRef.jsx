import { useRef, useState } from "react";
import fakeFetch from "../services/userService";

export default function UncontrolledFormRef() {
    const submitRef = useRef();


    const formSubmit = async (e) => {
        e.preventDefault();

        submitRef.current.disabled = true;

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = Object.fromEntries(formData.entries());
        const result = await fakeFetch(data);


        submitRef.current.disabled = false;

        console.log(result);
    };

    return (
        <>
            <h2>Uncontrolled Form Ref</h2>

            <form onSubmit={formSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <Submit ref={submitRef} />
            </form>

        </>
    );
};

function Submit({ ref }) {
    return (
        <div>
            <input ref={ref} type="submit" value="Submit" />
        </div>
    );
};