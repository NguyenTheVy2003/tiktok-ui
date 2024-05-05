
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext"


function Paragraph() {

    const context = useContext(ThemeContext)
    return (
        <p className={context.theme}>
            Đây là coder ngon nhất thế giới
        </p>
    )

}
export default Paragraph