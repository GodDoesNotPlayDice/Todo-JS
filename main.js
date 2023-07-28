import { App } from './src/todo/app.js';
import todoStore from './src/store/todo.store.js';
import 'animate.css';
todoStore.initStore();

App('#app');