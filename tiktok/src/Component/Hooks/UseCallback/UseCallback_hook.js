/*  
  Tạo 1 nút đếm số bắt đầu từ 1 
*/

import { useState, useCallback } from "react";
import Content from "./Content";



function UseCallback_hook() {

    const [count, setCount] = useState(0);

    const handelIncrease = useCallback(
        () => {
            setCount(prevCount => prevCount + 1)
        }, [])



    return (
        <div style={{ padding: 16 }}>
            <Content
                onIncrease={handelIncrease}
            />
            <h1>{count}</h1>
        </div>

    )
}

export default UseCallback_hook;
