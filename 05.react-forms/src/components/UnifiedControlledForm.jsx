import { useState } from "react";
import fakeFetch from "../services/userService";

export default function UnifiedControlledForm() {
    const [pending, setPending] = useState(false);
    const [formData, setFormData] = useState({ username: '', password: '' });

    const changeFormData = (e) => {
        setFormData(prevData => ({ 
            ...prevData,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setPending(true);

        const result = await(fakeFetch(formData));
        setPending(false);
        console.log(result);
        setFormData({ username: '', password: '' })
    };

    return (
        <>
            <h2>Unified Controlled Form</h2>

            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={changeFormData} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={changeFormData} />
                </div>
                <input type="submit" value="Submit" disabled={pending} />
            </form>
        </>
    );

};
