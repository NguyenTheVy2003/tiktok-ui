/*  
  Tạo 1 nút đếm số bắt đầu từ 1 
*/

import { useState } from "react";

function Hooks_State() {


  const [info, setInfo] = useState({
    name: 'Nguyễn Văn A',
    age: 21,
    address: 'Hồ Chí Minh'
  })

  

  const handelUpdate = () => {
    setInfo({
      ...info ,
      bio: 'Anh yêu em nhất mà'
    })
  }

 


  // Initial state với callBack
  // const oders = [100, 200, 300, 400, 600]

  // const [counter, setCounter] = useState(() => {
  //   const total = oders.reduce((total, cru) => total + cru)
  //   console.log(total);
  //   return total

  // })

  // const cong = () => {
  //   setCounter(prevSate => prevSate + 1)
  //   // prevSate set state với callback
  //   // setCounter(prevState => prevState +1)
  //   // setCounter(prevState => prevState +1)
  //   // setCounter(prevState => prevState +1)
  // }

  // const tru = () => {
  //   setCounter(counter - 1)
  // }

  return (
    <div style={{ padding: 20 }}>

      {/* <h1 style={{ marginLeft: 20 }}>Count: {counter}</h1>
      <button onClick={cong} style={{ marginRight: 10 }}>Cộng</button>
      <button onClick={tru}>Trừ</button> */}

      <h2>{JSON.stringify(info)}</h2>
      <button onClick={handelUpdate}>Update nè</button>
    </div>
  );
}

export default Hooks_State;
