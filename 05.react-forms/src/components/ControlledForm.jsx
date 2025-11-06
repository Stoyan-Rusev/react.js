import { useState } from "react";
import fakeFetch from "../services/userService";

export default function ControlledForm() {
    const [pending, setPending] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameChange = (e) => {
        setUsername(e.target.value);
    };

    const passwordChange = (e) => {
        setPassword(e.target.value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setPending(true);

        const result = await (fakeFetch({ username, password }));
        console.log(result);

        setPending(false);
    }

    return (
        <>
            <h2>Controlled Form</h2>

            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={username} onChange={usernameChange} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={passwordChange} />
                </div>
                <input type="submit" value="Submit" disabled={pending} />
            </form>
        </>
    );
};