import { useMemo, useRef, useState } from "react"

function UseMemoo() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const nameRef = useRef()
    const priceRef = useRef()

    const handelAdd = () => {
        setProducts([...products, {
            name: name,
            price: + price
        }])
        setName('')
        setPrice('')

        nameRef.current.focus()
        priceRef.current.focus()
    }

    const total = useMemo(() => {
        const tong = products.reduce((result, prod) => {
            console.log('Tinh toan ...')
            return result + prod.price
        }, 0)
        return tong
    }, [products])

    return (
        <div style={{ padding: '10px 32px' }}>
            <input
                value={name}
                ref={nameRef}
                placeholder="Enter name Product"
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                ref={priceRef}
                placeholder="Enter price Product"
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handelAdd}>Add Product</button>
            <br />
            Total: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    )
}
export default UseMemoo