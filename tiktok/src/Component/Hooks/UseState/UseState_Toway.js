/*  
  Tạo 1 nút đếm số bắt đầu từ 1 
*/

import { useState } from "react";

// code bt1
// const gifts = [
//     'Ram 16gb',
//     'SSD 1T',
//     'BMW',
// ]

function Toway() {

    /*
        bài toán 1
        const [gift, setGift] = useState();
        const randomGifts = () => {
        const index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index]);
    */


    /*
        Bai toan 2
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
    */

    /*
        Bai toan 3
        check Radio

        const courses = [
            {
                id: 1,
                name: 'HTML, CSS'
            },
            {
                id: 2,
                name: 'ReactJS, NodeJS'
            },
            {
                id: 3,
                name: 'Android, Swift'
            }
        ]

        const [checked, setChecked] = useState(2)
        const handelSubmit = () => {
        console.log({ id: checked});
        }
          {courses.map(course => (
                <div key={course.id}>
                    <input
                        type="radio"
                        checked={checked === course.id}
                        onChange={() => setChecked(course.id)} />
                    {course.name}
                </div>
            ))}

            <button onClick={handelSubmit}>Click me!</button>
    
    */
    /*
        Bai toan 4 checkBox


            const courses = [
                {
                    id: 1,
                    name: 'HTML, CSS'
                },
                {
                    id: 2,
                    name: 'ReactJS, NodeJS'
                },
                {
                    id: 3,
                    name: 'Android, Swift'
                }
            ]

            const [checked, setChecked] = useState([])

            const handelSubmit = () => {
            console.log({ ids: checked });

            const handelCheck = (id) => {
                setChecked(prev => {
                const isChecked = checked.includes(id)

                if (isChecked) {
                    // unChecked
                    return checked.filter(items => items !== id)
                }
                else {
                    return [...prev, id]
                }   
            })

            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type="checkbox"
                        checked={checked.includes(course.id)}
                        onChange={() => handelCheck(course.id)} />
                    {course.name}
                </div>
            ))}

            <button onClick={handelSubmit}>Click me!</button>
    */
    const courses = [
        {
            id: 1,
            name: 'HTML, CSS'
        },
        {
            id: 2,
            name: 'ReactJS, NodeJS'
        },
        {
            id: 3,
            name: 'Android, Swift'
        }
    ]


    const [checked, setChecked] = useState([])



    const handelSubmit = () => {
        console.log({ ids: checked });
    }

    const handelCheck = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id)

            if (isChecked) {
                // unChecked
                return checked.filter(items => items !== id)
            }
            else {
                return [...prev, id]
            }
        })
    }

    return (
        <div style={{ padding: 20 }}>

            {/* 
                code bt1

                <h1>{gift || 'Chưa có phần thưởng cu'}</h1>
                <button onClick={randomGifts}>Lấy thưởng</button> 
            */}

            {/* 
                code bt2

                <input value={name}
                onChange={e => setName(e.target.value)} />
                <input value={email}
                onChange={e => setEmail(e.target.value)} /> 
                <button onClick={handelSubmit}>Click me!</button>

            */}

            {courses.map(course => (
                <div key={course.id}>
                    <input
                        type="checkbox"
                        checked={checked.includes(course.id)}
                        onChange={() => handelCheck(course.id)} />
                    {course.name}
                </div>
            ))}

            <button onClick={handelSubmit}>Click me!</button>

        </div>
    );
}

export default Toway;
