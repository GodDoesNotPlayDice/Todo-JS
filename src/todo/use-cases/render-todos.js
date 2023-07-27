import { createTodoHTML } from './index.js';

/**
 * 
 * @param {string} elementId 
 * @param {string} todos 
 */
export const renderTodos = (elementId ,todos) => { 
    const element = document.querySelector(elementId);
    todos.forEach(todo => {
        element.innerHTML += createTodoHTML(todo);
    });
};