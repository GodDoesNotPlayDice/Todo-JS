import html from './app.html?raw';
/**
 * 
 * @param {string} elementID 
 */
export const App = ( elementID ) => { 
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementID).append(app);
     })();

}