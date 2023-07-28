import { Todo } from '../todo/models/todo.model.js';
import { alert_success, alert_delete, alert_info } from '../todo/use-cases/';
const Filters = {
    'All': 'all',
    'Completed': 'completed',
    'Pending': 'pending',
    
}
const state = {
    todos: [ ],
    filter: Filters.All,
}

const initStore = () => {
    loadStore();
}


const loadStore = () => {
    if (!localStorage.getItem('state')) return;
    const { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state'));
    state.todos = todos
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}


const getTodos = ( filter = Filters.All ) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return [...state.todos].filter(todo => todo.status);
        case Filters.Pending:
            return [...state.todos].filter(todo => !todo.status);
        default:
            throw new Error('Invalid filter: ' + filter + '');
    }
}

const addTodo = (title) => {
    if (!title) throw new Error('Title is required');
        state.todos.push(new Todo (title, false));
        saveStateToLocalStorage();
        alert_success('Add Task Successfully');

}
const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if (todo.id === todoId) {
            alert_success(todo.status ? 'Task pending' : 'Task completed');
            todo.status = !todo.status;
        }
        return todo;
    });
    saveStateToLocalStorage();
}
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    alert_delete('Delete Task Successfully')
    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    if (state.todos.filter(todo => todo.status).length === 0) {
        alert_info('You dont have completed tasks');
        return;
    }
    state.todos = state.todos.filter(todo => !todo.status);
    alert_delete('Delete Completed Tasks Successfully')
    saveStateToLocalStorage();
};


const setFilter = (newfilter = Filters.All) => {
    state.filter = newfilter;
    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}


export default {
    initStore,
    loadStore,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    getCurrentFilter,
    setFilter,
    deleteCompleted,
    Filters,
}