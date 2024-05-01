/*  
  Tạo 1 nút đếm số bắt đầu từ 1 
*/

import { useState, useEffect } from "react";

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

function UseEffect_hook() {
    // Mounted & Unmounted?

    const [title, setTitle] = useState('')

    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')




    useEffect(() => {

        console.log('Title Changed');
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])


    return (
        <div style={{ padding: 16, marginBottom: 16 }}>

            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {

                    }}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input value={title}
                onChange={e => setTitle(e.target.value)} />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>

        </div>

    )
}

export default UseEffect_hook;


/**
 * Lý thuyết
 * 1. useEffect(callback)
 * 2. useEffect(callback, [])
 * 3. useEffect(callback, [deps])
 * 
 * ------------------------------------
 * 1. Callback luôn được gọi sau khi component mounted
 * 
 * 2.  Chỉ gọi callback 1 lần khi component muonted
 * 
 * 3. callback sẽ được gọi lại mỗi khi deps thay đổi
 */


