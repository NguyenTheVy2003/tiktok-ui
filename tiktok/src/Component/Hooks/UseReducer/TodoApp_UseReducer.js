
import { useReducer, useRef } from "react"
import reducer, { initState } from "./reducer"
import { setJob, addJob, deleteJob } from "./actions"
import logger from "./logger"


// useReducer
//1. Init state: 0
//2. Actions: Up (state + 1) / Down (state - 1)
//3. Reducer
//4. Dispatch

function TodoApp() {

    const [state, dispatch] = useReducer(logger(reducer), initState)
    const { job, jobs } = state

    const inputRef = useRef()

    const handelSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))

        inputRef.current.focus()
    }

    console.log(initState);

    return (
        <div>
            <h2>Todo</h2>
            <input
                value={job}
                ref={inputRef}
                placeholder="Enter Job"
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}

            />
            <button onClick={handelSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => dispatch(deleteJob(index))}>
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TodoApp