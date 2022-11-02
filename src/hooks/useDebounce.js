import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const timeId = setTimeout(() => setDebounce(value), delay);
        return () => clearTimeout(timeId);
    }, [value]);

    return debounce;
}

export default useDebounce;
