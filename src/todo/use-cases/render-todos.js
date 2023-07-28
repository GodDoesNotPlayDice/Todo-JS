import { createTodoHTML } from './index.js';

/**
 * 
 * @param {string} elementId 
 * @param {string} todos 
 */
export const renderTodos = (elementId ,todos) => { 
    const element = document.querySelector(elementId);
    element.innerHTML = '';
    todos.forEach(todo => {
        element.innerHTML += createTodoHTML(todo);
    });
};

export const renderTodo = (elementId, todo) => {
    const element = document.querySelector(elementId);
    element.innerHTML += createTodoHTML(todo);
};