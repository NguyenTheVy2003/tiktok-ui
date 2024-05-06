import {
    SET_TODO_INPUT,
    ADD_TODO,
    DELETE_TODO,
    START_EDIT_TODO,
    EDITING_TODO,
    END_EDIT_TODO,
    DELETE_TODO_ALL
} from "./constant";

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})


export const deleteTodo = payload => ({
    type: DELETE_TODO,
    payload
})

export const deleteTodoAll = payload => ({
    type: DELETE_TODO_ALL,
    payload
})

export const startEditTodo = (payload) => ({
    type: START_EDIT_TODO,
    payload
});

export const editingTodo = (payload) => ({
    type: EDITING_TODO,
    payload
});

export const endEditTodo = (payload) => ({
    type: END_EDIT_TODO,
    payload
});