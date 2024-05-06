/*  
  Tạo 1 nút đếm số bắt đầu từ 1 
*/

import { useState, useEffect } from "react";

const lessons = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'JavaScript'
    },
    {
        id: 3,
        name: 'ReactJS, React Native'
    }
]



function ChatApp() {

    const [lessonsId, setLessonsId] = useState(1)

    useEffect(() => {

        const handelComent = ({ detail }) => {
            console.log(detail);
        }

        window.addEventListener(`lessons-${lessonsId}`, handelComent)
        return () => {
            window.removeEventListener(`lessons-${lessonsId}`, handelComent)
        }
    }, [lessonsId])

    return (
        <div style={{ padding: 16 }}>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonsId === lesson.id ?
                                'red' :
                                '#333'
                        }}
                        onClick={() => setLessonsId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default ChatApp;
