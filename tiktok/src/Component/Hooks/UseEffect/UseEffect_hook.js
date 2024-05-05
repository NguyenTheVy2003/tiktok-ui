/*  
  Tạo 1 nút đếm số bắt đầu từ 1 
*/

import { useState, useEffect } from "react";

const tabs = ['posts', 'comments', 'albums', 'photos']

function UseEffect_hook() {
    // Mounted & Unmounted?

    const [title, setTitle] = useState('')

    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')

    const [showgoToTop, setShowGoToTop] = useState(false)
    const [Width, setWidth] = useState(window.innerWidth)


    // call Api
    useEffect(() => {

        console.log('Title Changed');
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])


    // show gotoTop button
    useEffect(() => {

        const handelScroll = () => {
            if (window.scrollY >= 200) {
                // show
                setShowGoToTop(true)
            } else {
                // hide
                setShowGoToTop(false)
            }
        }
        window.addEventListener('scroll', handelScroll)
        console.log('addEventListener');

        // cleanUp
        return () => {
            window.removeEventListener('scroll', handelScroll)
            console.log('removeEventListener');
        }
    }, [])

    // show width window
    useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        console.log('handleResize');

        // cleanUp

        return () => {
            window.removeEventListener('resize', handleResize)
            console.log('removeEventListener');
        }
    }, [])


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
            <h2>Cửa sổ trình duyệt With: {Width}</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>

            {showgoToTop && (
                <button
                    style={{ backgroundColor: '#fff', color: '#333', position: 'fixed', right: 20, bottom: 20 }}

                >
                    Go to Top
                </button>
            )}

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


