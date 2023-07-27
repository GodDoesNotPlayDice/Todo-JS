import { Todo } from '../todo/models/todo.model.js';

const Filters = {
    'All': 'all',
    'Completed': 'completed',
    'Pending': 'pending',
    
}
const state = {
    todos: [ 
        new Todo('Learn JS', true),
        new Todo('Learn Vue', true),
        new Todo('Learn React', false),
        new Todo('Learn Maths', false),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state)
    console.log('initStore 🧻');
}


const loadStore = () => {
    console.log('loadStore 🧻');
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

}
const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if (todo.id === todoId) {
            todo.status = !todo.status;
        }
        return todo;
    });
}
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
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
    Filters,
}