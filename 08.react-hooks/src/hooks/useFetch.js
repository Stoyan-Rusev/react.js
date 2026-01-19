import { useEffect, useState } from "react";

export function useFetch(url) {
    const [pending, setPending] = useState(true);
    const [state, setState] = useState([]);

    useEffect(() => {
        setPending(true);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setState(Object.values(data));
            })
            .catch(err => console.log(err))
            .finally(() => setPending(false));
    }, [url]);

    return [pending, state];
};