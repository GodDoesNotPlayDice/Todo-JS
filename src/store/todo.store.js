import { Todo } from '../todo/models/todo.model.js';

const Filters = {
    'All': 'all',
    'Completed': 'completed',
    'Pending': 'pending',
    
}
const state = {
    todos: [ 
        new Todo('Learn JS', true),
        new Todo('Learn Vue', false),
        new Todo('Learn React', false),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state)
    console.log('initStore 🧻');
}

export default {
    initStore,
}