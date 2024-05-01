/*  
  Tạo 1 nút đếm số bắt đầu từ 1 
*/

import Hooks from "../UseState/UseState_state";
import Toway from "../UseState/UseState_Toway";
import TodoList from "../UseState/TodoList";
import { useState } from "react";

function Mounted_Unmounted() {
    // Mounted & Unmounted?
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    return (
        <div style={{ padding: 20, marginBottom: 16 }}>
            <button onClick={() => setShow(!show)} >TodoList</button>
            {show && <TodoList />}
            <button onClick={() => setShow2(!show2)}>UseState</button>
            {show2 && <Hooks />}
            <button onClick={() => setShow3(!show3)}>Toway</button>
            {show3 && <Toway />}
        </div>

    )
}

export default Mounted_Unmounted;


/**
 * Lý thuyết
 * 1. useEffect(callback)
 * 2. useEffect(callback, [])
 * 3. useEffect(callback, [deps])
 * 
 * ------------------------------------
 * 1. Callback luôn được gọi sau khi component mounted
 */


