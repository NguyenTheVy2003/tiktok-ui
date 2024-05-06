import video1 from "./videos/video-1.mp4";
import { useRef, useImperativeHandle, forwardRef } from "react";
function Video(props, ref) {

    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    return (
        <video
            ref={videoRef}
            width='30%'
            src={video1}
            
        />
    )
}

export default forwardRef(Video)