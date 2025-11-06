import { useState } from "react";
import fakeFetch from "../services/userService";

export default function UncontrolledForm() {
    const [pending, setPending] = useState(false);

    const formSubmit = async (e) => {
        e.preventDefault();
        setPending(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = Object.fromEntries(formData.entries());
        const result = await fakeFetch(data);

        setPending(false);
        console.log(result);
    };

    return (
        <>
            <h2>Uncontrolled Form</h2>

            <form onSubmit={formSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <input type="submit" value="Submit" disabled={pending}/>
                </div>
            </form>

        </>
    );

};
