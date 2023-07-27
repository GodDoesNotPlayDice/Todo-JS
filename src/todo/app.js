import html from './app.html?raw';
import todoStore from '../store/todo.store.js';
import { renderTodos, countTodos } from './use-cases';

const elementIDs = {
    'todoList': '#todo-list',
    'text_input': '#task_input',
    'btn_add': '#btn_add',
    'error_text': '#error_text',
    'count_done': '#count-done',
    'count_pending': '#count-pending',
    'count_all': '#count-all',
} 

export const App = ( elementID ) => { 
    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(elementIDs.todoList, todos);
        countTodos(elementIDs.count_done, elementIDs.count_pending, elementIDs.count_all ,todos);
    };

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementID).append(app);
        displayTodos();
     })();

     const textInput = document.querySelector(elementIDs.text_input);
     const btnAdd = document.querySelector(elementIDs.btn_add);
     const error_text = document.querySelector(elementIDs.error_text);
     const max_length = 25;
     const min_length = 3;

     textInput.addEventListener('keyup', (e) => { 
        textInput.classList.add('text-green-600');
        if (textInput.value.trim().length > max_length) {
           textInput.classList.replace('text-green-600', 'text-red-500');
        }
        else if (textInput.value.trim().length < min_length) {
            textInput.classList.replace('text-green-600', 'text-red-500');
        } else {
            textInput.classList.replace('text-red-500', 'text-green-600');
        } 

      });
    
    btnAdd.addEventListener('click', (e) => {
        e.preventDefault();
        if (textInput.value.trim().length > max_length) {
            error_text.classList.remove('hidden');
            error_text.innerText = 'Task must be less than 20 characters';
        }
        else if (textInput.value.trim().length < min_length) {
            error_text.classList.remove('hidden');
            error_text.innerText = 'Task must be more than 5 characters';

        } else {
            error_text.classList.add('hidden');
            const text = textInput.value.trim();
        }
    });
}