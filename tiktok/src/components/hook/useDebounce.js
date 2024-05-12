import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [debounceValue, setDebuonceValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebuonceValue(value), delay)

        return () => clearTimeout(handler)

    }, [value])

    return debounceValue;
}

export default useDebounce