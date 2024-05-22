import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [debouncedValue, setDebuonceValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebuonceValue(value), delay)

        return () => clearTimeout(handler)


    }, [value])

    return debouncedValue;
}

export default useDebounce