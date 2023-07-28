import { Todo } from '../models/todo.model.js';

export const createTodoHTML = (todo) => {
    if (!todo instanceof Todo) throw new Error('Invalid Todo instance');
    const status = todo.status ? 'fa-solid fa-check mr-2 cursor-pointer text-green-500' : 'fa-solid fa-clock mr-2 text-yellow-500';
    const html = `<div data_id=${todo.id} class="bg-stone-900 hover:bg-stone-700 hover:transition-all transition-all cursor-pointer rounded-md my-2 flex items-center justify-between">
    <div class="p-3 flex items-center">
        <i class="${status}"></i>
        <p class="text-sm text-gray-300">${todo.title}</p>
    </div>
    <div>
        <i class="fa-solid cursor-pointer fa-trash p-2 mr-1 text-red-600 hover:bg-opacity-30 hover:transition-all transition-all hover:bg-black rounded-full"></i>
    </div>
</div>`
    return html;
};