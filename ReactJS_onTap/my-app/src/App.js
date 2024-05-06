/*  
  Tạo 1 nút đếm số bắt đầu từ 1 
*/
// import Mounted from "./Component/Hooks/UseState/Mounted&Unmounted";
// import UseEffect from "./Component/Hooks/UseEffect/UseEffect_hook";
// import TimerFunction from "./Component/Hooks/UseEffect/TimerFunction";
// import ChatApp from "./Component/Hooks/UseEffect/ChatApp";
// import UseReff from "./Component/Hooks/UseEffect/UseReff";
// import UseMemoo from "./Component/Hooks/UseCallback/UseMemoo";
// import UseReducer from "./Component/Hooks/UseReducer/UseReducer_hook";
// import UseCallback_hook from "./Component/Hooks/UseCallback/UseCallback_hook";
// import TodoApp from "./Component/Hooks/UseReducer/TodoApp_UseReducer";
// import UseContext from "./Component/Hooks/UseContex/UseContex_hook";
// import Provider from "./Component/Hooks/UseContex/store/Provider";
// import { useState } from "react";
// Mounted & Unmounted?
// const [show, setShow] = useState(false)
/* <button onClick={() => setShow(!show)}>Toggle</button>
    {show && <Provider />} */

import './App.css'
// import { useStore, actions, Storage } from './Component/Hooks/UseContex/store'
// import { useRef, useLayoutEffect } from "react";



// function App() {

//   const inputRef = useRef();
//   const [todo, dispatch] = useStore()
//   const { todos, todoInput, editIndex, editInput } = todo;


//   useLayoutEffect(() => {
//     // khi component được mounted thì focus input
//     inputRef.current.focus();
//     // lưu lại mỗi lần todos thay đổi
//     Storage.set(todos);
//   }, [todos]);


//   const handleDelete = (index) => {
//     dispatch(actions.deleteTodo(index));
//   };

//   const handleAdd = () => {
//     if (todoInput) {
//       dispatch(actions.addTodo(todoInput));
//       dispatch(actions.setTodoInput(""));
//     }
//     inputRef.current.focus();

//   }

//   const handleDeleteAll = () => {
//     dispatch(actions.deleteTodoAll())
//     inputRef.current.focus();
//   }


//   const handleStartEdit = ({ todo, index }) => {
//     console.log("nhan 2 lan roi");
//     dispatch(actions.startEditTodo({ todo, index }));
//   }

//   return (
//     <div style={{ padding: 20, marginBottom: 16 }}>
//       <input
//         value={todoInput}
//         ref={inputRef}
//         placeholder='Enter todo...'
//         onChange={e => {
//           dispatch(actions.setTodoInput(e.target.value))
//         }}
//         onKeyUp={(e) => e.key === "Enter" && handleAdd()}
//       />

//       <button
//         onClick={handleAdd}
//         style={{ margin: "0 8px", cursor: "pointer" }}
//       >Add
//       </button>

//       <button
//         style={{ cursor: "pointer" }}
//         onClick={handleDeleteAll}>
//         DeleteAll
//       </button>

//       {/* {todos.map((todo, index) => (
//         <li key={index}>
//           {todo}
//           <span
//             onClick={() => dispatch(actions.deleteTodo(index))}>
//             &times;
//           </span>
//         </li>
//       ))} */}

//       {todos.map((todo, index) => (
//         <li key={index} onDoubleClick={() => handleStartEdit({ todo, index })}>
//           {editIndex === index ? (
//             <input
//               autoFocus
//               value={editInput}
//               onChange={(e) => dispatch(actions.editingTodo(e.target.value))}
//               onBlur={() => dispatch(actions.endEditTodo({ editInput, index }))}
//               onKeyUp={(e) =>
//                 e.key === "Enter" &&
//                 dispatch(actions.endEditTodo({ editInput, index }))
//               }
//             />
//           ) : (
//             <span>
//               {todo}
//               <i
//                 style={{
//                   margin: "0 8px 0 24px",
//                   cursor: "pointer"
//                 }}
//                 className="bx bx-pencil"
//                 onClick={() => handleStartEdit({ todo, index })}
//               ></i>
//               <i
//                 style={{ cursor: "pointer" }}
//                 onClick={() => handleDelete(index)}
//                 className="bx bxs-trash"
//               > &times;</i>
//             </span>
//           )}
//         </li>
//       ))}

//     </div>

//   )
// }


// import { useRef } from 'react';
// import Video from './Video';

// function App() {
//   const videoRef = useRef()

//   const handlePlay = () => {
//     videoRef.current.play()
//   }

//   const handlePause = () => {
//     videoRef.current.pause()
//   }
//   return (
//     <div>
//       <Video ref={videoRef} />
//       <button onClick={handlePlay}>Play</button>
//       <button onClick={handlePause}>Pause</button>
//     </div>
//   )
// }



// import Paragraph from './Component/CSS-module/Component/Paragraph';
// import Heading from './Component/CSS-module/Component/Heading';
import Button from './Component/CSS-module/Component/Button/Button';
import GlobalStyles from './Component/CSS-module/Component/GlobalStyle/index';


function App() {
  return (

    <GlobalStyles>
      <div className='d-flex'>
        <Button />
        <Button primary />
        <Button primary disable />
      </div>
    </GlobalStyles>

  )
}

export default App;


