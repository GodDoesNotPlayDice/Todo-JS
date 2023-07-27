import { Todo } from '../models/todo.model.js';


export const createTodoHTML = (todo) => {
    if (!todo instanceof Todo) throw new Error('Invalid Todo instance');
    const status = todo.status ? 'fa-solid fa-check mr-2 cursor-pointer text-green-500' : 'fa-solid fa-clock mr-2 cursor-pointer text-yellow-500';
    const html = `<div class="bg-stone-900 rounded-md my-2 flex items-center justify-between">
    <div class="p-3 flex items-center">
        <i class="${status}"></i>
        <p class="text-sm text-gray-300">${todo.title}</p>
    </div>
    <div>
        <i class="fa-solid cursor-pointer fa-trash mx-3 text-red-600"></i>
    </div>
</div>`
    return html;
};