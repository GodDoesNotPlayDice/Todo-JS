import html from './app.html?raw';
import todoStore from '../store/todo.store.js';
import { renderTodos, countTodos, renderTodo } from './use-cases';

const elementIDs = {
    'todoList': '#todo-list',
    'text_input': '#task_input',
    'btn_add': '#btn_add',
    'error_text': '#error_text',
    'count_done': '#count-done',
    'count_pending': '#count-pending',
    'count_all': '#count-all',
    'clear_completed': '#clear-completed',
    'task_states': '#task-states',
} 


/**
 * 
 * @param {string} elementID 
 */
export const App = ( elementID ) => { 
    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(elementIDs.todoList, todos);
        const todos_all = todoStore.getTodos(todoStore.Filters.All);
        countTodos(elementIDs.count_done, elementIDs.count_pending, elementIDs.count_all ,todos_all)
    };

    const displayTodo = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        let last_todo = todos[todos.length - 1];
        renderTodo(elementIDs.todoList, last_todo);
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
     const max_length = 30;
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
            error_text.innerText = `Task must be less than ${max_length} characters`;
        }
        else if (textInput.value.trim().length < min_length) {
            error_text.classList.remove('hidden');
            error_text.innerText = `Task must be more than ${min_length} characters`;

        } else {
            error_text.classList.add('hidden');
            const text = textInput.value.trim();
            todoStore.addTodo(text);
            textInput.value = '';
            displayTodo();
        }
    });

    const todoList = document.querySelector(elementIDs.todoList);
    todoList.addEventListener('click', (e) => { 
        const element = e.target.closest('[data_id]');
        if (element === null) return;
        let data_id = element.getAttribute('data_id');
        if (e.target.classList.contains('fa-trash')) {
            todoStore.deleteTodo (data_id);
            displayTodos();
            return;
        } else {
            todoStore.toggleTodo(data_id);
            displayTodos();
        }
    });

    const clear_completed = document.querySelector(elementIDs.clear_completed);
    clear_completed.addEventListener('click', (e) => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    const task_states = document.querySelector(elementIDs.task_states);
    task_states.addEventListener('click', (e) => { 
        let taks_status = String(e.target.closest('[data-state]').getAttribute('data-state'));
        todoStore.setFilter(taks_status);
        displayTodos();
    });
}

console.log('Created By GodDoesNotPlayDice');
console.log('https://github.com/GodDoesNotPlayDice');