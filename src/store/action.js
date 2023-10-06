/*
 * типы экшенов
 */
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

/*
 * генераторы экшенов
 */
export const addTodo = (text) => ({type: ADD_TODO, text});

export const deleteTodo = (text) => ({type: DELETE_TODO, text});
