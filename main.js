import { App } from './src/todo/app.js';
import todoStore from './src/store/todo.store.js';
todoStore.initStore();

App('#app');