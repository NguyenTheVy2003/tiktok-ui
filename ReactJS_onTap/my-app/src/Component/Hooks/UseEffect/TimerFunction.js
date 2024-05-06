/*  
  Tạo 1 nút đếm số bắt đầu từ 1 
*/

import { useState, useEffect } from "react";



function TimerFunction() {

    // const [countdown, setCountdown] = useState(180)

    const [avatar, setAvatar] = useState()


    const handelPreviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])



    // dùng setInterval
    // useEffect(() => {
    //     const timeId = setInterval(() => {
    //         setCountdown(prevState => prevState - 1)
    //         console.log('countdown: ',countdown)
    //     }, 1000)
    //     return () => clearInterval(timeId)
    // }, [])

    // dùng setTimeOut

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCountdown(countdown - 1)
    //     }, 1000)
    // }, [countdown])



    return (
        <div style={{ padding: 16 }}>
            <input
                type="file"
                onChange={handelPreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width='80%'></img>
            )}
        </div>

    )
}

export default TimerFunction;
