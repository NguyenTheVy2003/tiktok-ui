/*  
  Tạo 1 nút đếm số bắt đầu từ 1 
*/
// import Mounted from "./Component/Hooks/UseState/Mounted&Unmounted";
import UseEffect from "./Component/Hooks/UseEffect/UseEffect_hook";
import { useState } from "react";
function App() {
  // Mounted & Unmounted?
  const [show,setShow] = useState(false)
  return (

    <div style={{ padding: 20, marginBottom: 16 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <UseEffect/>}
    </div>

  )
}

export default App;


