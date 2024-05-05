
import {
    SET_TODO_INPUT,
    ADD_TODO,
    DELETE_TODO,
    START_EDIT_TODO,
    EDITING_TODO,
    END_EDIT_TODO,
    DELETE_TODO_ALL
} from "./constant"
import storage from "./storage"
const initState = {
    todos: storage.get(),
    todoInput: "",
    editIndex: null,
    editInput: ""
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }

        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }


        case DELETE_TODO:
            const newTodo = [...state.todos]
            newTodo.splice(action.payload, 1)
            return {
                ...state,
                todos: newTodo
            }

        case DELETE_TODO_ALL:
            return {
                ...state,
                todos: []
            }
        case START_EDIT_TODO:
            return {
                ...state,
                editIndex: action.payload.index,
                editInput: action.payload.todo
            }
        case EDITING_TODO:
            return {
                ...state,
                editInput: action.payload
            }
        case END_EDIT_TODO:
            state.todos[action.payload.index] = action.payload.editInput;
            storage.set(state.todos);
            return {
                ...state,
                editIndex: null
            }

        default: throw new Error('Invalid action.')
    }
}

export { initState }
export default reducer