

/**
 * 1. Create contex
 * 2. Provider
 * 3. Consumer
 */
import Content from "./content"

import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function UseContext_hook() {

    const context = useContext(ThemeContext)

    return (

        <div style={{ padding: 20 }}>
            <button onClick={context.toggleTheme}>Toggle theme</button>
            <Content />
        </div>

    )
}
export default UseContext_hook