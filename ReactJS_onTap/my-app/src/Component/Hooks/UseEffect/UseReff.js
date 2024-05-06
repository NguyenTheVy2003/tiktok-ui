/*  
  Tạo 1 nút đếm số bắt đầu từ 1 
*/

import { useState, useRef, useEffect } from "react";



function UseReff() {

    let so = Math.random()
    const [count, setCount] = useState(so)


    const timeId = useRef()
    const prevCount = useRef()

    useEffect(() => {
        prevCount.current = count
    },[count])

    const handelStart = () => {
        timeId.current = setInterval(() => {
            setCount(prevCount => prevCount + so)
        }, 1000);

        console.log('Start -> ', timeId.current);
    }

    const handelStop = () => {
        clearInterval(timeId.current)
        console.log('Stop -> ', timeId.current);
    }

    console.log(count,prevCount.current)

    return (
        <div style={{ padding: 16 }}>
            <h1>{count}</h1>
            <button onClick={handelStart}>start</button>
            <button onClick={handelStop}>stop</button>
        </div>

    )
}

export default UseReff;
