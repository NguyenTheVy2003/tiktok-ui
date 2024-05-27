import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [debouncedValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay)

        return () => clearTimeout(handler)


    }, [delay, value])

    return debouncedValue;
}

export default useDebounce