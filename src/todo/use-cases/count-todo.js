export const countTodos = (done, pending, all, todos) => {
    if (!Array.isArray(todos)) throw new Error('Invalid todos');
    document.querySelector(done).innerText = todos.filter(todo => todo.status).length;
    document.querySelector(pending).innerText = todos.filter(todo => !todo.status).length; 
    document.querySelector(all).innerText = todos.length;
}
