(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const k=`<header>\r
    <div class="bg-stone-800 lg:flex lg:items-center">\r
        <div class="items-center justify-center lg:justify-start p-5 flex">\r
            <h1 class="text-3xl mx-5 font-light text-gray-300  animate__animated animate__flip">To Do List</h1>\r
            <img class="w-8 h-8 rounded-md animate__zoomInUp animate__animated"\r
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="">\r
        </div>\r
        <div class="p-4 flex justify-center lg:justify-start">\r
            <a class="text-gray-300 underline underline-offset-4"\r
                href="https://github.com/GodDoesNotPlayDice/Todo-JS">Source Code</a>\r
        </div>\r
    </div>\r
</header>\r
<main>\r
    <section>\r
        <div class="flex justify-center mt-4">\r
            <form class="w-full">\r
                <h3 class="text-2xl text-center text-gray-300 my-3">New task.</h3>\r
                <label class="flex flex-col items-center" for="task">\r
                    <input placeholder="Add a new task."\r
                        class="animate__rubberBand animate__animated bg-stone-800 transition-all focus:transition-all h-10 w-3/4 lg:max-w-xl placeholder:text-stone-500 p-4 text-sm text-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-70"\r
                        id="task_input" name="task" type="text">\r
                    <p id="error_text" class="text-red-600 my-2 relative lg:right-40 hidden"></p>\r
                </label>\r
                <div class="flex justify-center mx-10">\r
                    <button\r
                        class="my-4 bg-green-500 hover:bg-green-700 hover:transition-all transition-all p-2 text-black font-semibold rounded-md w-full lg:max-w-sm"\r
                        id="btn_add">Ok!</button>\r
                </div>\r
            </form>\r
        </div>\r
    </section>\r
    <div class="flex justify-center overflow-x-hidden">\r
        <div class="my-6 lg:my-10 w-10/12 lg:w-full">\r
            <section>\r
                <div class="flex justify-center lg:justify-start lg:mx-5">\r
                    <div class="fixed bottom-0 lg:sticky w-full lg:w-auto">\r
                        <header>\r
                            <nav>\r
                                <ul id="task-states" class="flex justify-center text-center bg-stone-800 lg:rounded-md">\r
                                    <li data-state="all"\r
                                        class="hover:bg-stone-700 transition-all hover:transition-all hover:rounded-l-md px-3 text-gray-300 text-sm flex items-center cursor-pointer">\r
                                        <i class="fa-solid fa-list-check"></i>\r
                                        <p class="p-3">Tasks</p>\r
                                    </li>\r
                                    <li data-state="completed"\r
                                        class="hover:bg-stone-700 transition-all hover:transition-all px-3 text-gray-300 text-sm flex items-center cursor-pointer">\r
                                        <i class="fa-solid fa-check text-green-500"></i>\r
                                        <p class="p-3">Completed</p>\r
                                    </li>\r
                                    <li data-state="pending"\r
                                        class="hover:bg-stone-700 transition-all hover:transition-all hover:rounded-r-md px-3 text-gray-300 text-sm flex items-center cursor-pointer">\r
                                        <i class="fa-solid fa-clock text-yellow-500"></i>\r
                                        <p class="p-3">Pending</p>\r
                                    </li>\r
                                </ul>\r
                            </nav>\r
                        </header>\r
                    </div>\r
                </div>\r
            </section>\r
            <div class="lg:flex">\r
                <section class="w-full">\r
                    <div class=" bg-stone-800 mx-5 rounded-md my-2 p-2">\r
                        <h3 class="text-xl lg:text-2xl text-gray-300 font-thin text-center my-2">Tasks</h3>\r
                        <div class="overflow-auto lg:overflow-auto px-5 max-h-96" id="todo-list">\r
                        </div>\r
                    </div>\r
                </section>\r
                <section class="lg:w-3/4">\r
                    <div class=" bg-stone-800 mx-5 rounded-md my-2 mb-10 p-2">\r
                        <h3 class="text-xl lg:text-2xl text-gray-300 font-thin text-center my-2">Task Status</h3>\r
                        <div class="bg-stone-900 my-2 flex items-center justify-between">\r
                            <div class="p-3 flex items-center">\r
                                <i class="fa-solid fa-clock mr-2 cursor-pointer text-yellow-500"></i>\r
                                <p id="count-pending" class="text-sm text-gray-300"></p>\r
                            </div>\r
                        </div>\r
                        <div class="bg-stone-900 my-2 flex items-center justify-between">\r
                            <div class="p-3 flex items-center">\r
                                <i class="fa-solid fa-check mr-2 cursor-pointer text-green-500"></i>\r
                                <p id="count-done" class="text-sm text-gray-300"></p>\r
                            </div>\r
                        </div>\r
                        <div class="bg-stone-900 my-2 flex items-center justify-between">\r
                            <div class="p-3 flex items-center">\r
                                <i class="fa-solid fa-list-check text-white mr-2 cursor-pointer"></i>\r
                                <p id="count-all" class="text-sm text-gray-300"></p>\r
                            </div>\r
                        </div>\r
                    </div>\r
                </section>\r
            </div>\r
        </div>\r
    </div>\r
    <div class="flex justify-start">\r
        <div id="clear-completed" class="animate__bounce animate__animated group transition-all group-hover:trasition-all p-4 mx-2 lg:mx-4 lg:bottom-4 fixed bottom-14 flex justify-center items-center bg-red-800 bg-opacity-95 rounded-full hover:bg-red-700 cursor-pointer">\r
            <i class="fa-solid cursor-pointer fa-trash text-white"></i>\r
            <p class="transition-all group-hover:trasition-all overflow-hidden opacity-0 w-0 h-0 text-sm text-white group-hover:opacity-100 group-hover:w-auto group-hover:h-auto group-hover:ml-2">Delete all completed</p>\r
        </div>                        \r
    </div>\r
</main>`;let f;const S=new Uint8Array(16);function L(){if(!f&&(f=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!f))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return f(S)}const i=[];for(let t=0;t<256;++t)i.push((t+256).toString(16).slice(1));function A(t,e=0){return(i[t[e+0]]+i[t[e+1]]+i[t[e+2]]+i[t[e+3]]+"-"+i[t[e+4]]+i[t[e+5]]+"-"+i[t[e+6]]+i[t[e+7]]+"-"+i[t[e+8]]+i[t[e+9]]+"-"+i[t[e+10]]+i[t[e+11]]+i[t[e+12]]+i[t[e+13]]+i[t[e+14]]+i[t[e+15]]).toLowerCase()}const D=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),v={randomUUID:D};function C(t,e,r){if(v.randomUUID&&!e&&!t)return v.randomUUID();t=t||{};const n=t.random||(t.rng||L)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){r=r||0;for(let s=0;s<16;++s)e[r+s]=n[s];return e}return A(n)}class y{constructor(e,r){this.id=C(),this.title=e,this.status=!!r,this.createdAt=new Date}}const j=(t,e)=>{const r=document.querySelector(t);r.innerHTML="",e.forEach(n=>{r.innerHTML+=b(n)})},I=(t,e)=>{const r=document.querySelector(t);r.innerHTML+=b(e)},b=t=>{if(!t instanceof y)throw new Error("Invalid Todo instance");const e=t.status?"fa-solid fa-check mr-2 cursor-pointer text-green-500":"fa-solid fa-clock mr-2 text-yellow-500";return`<div data_id=${t.id} class="bg-stone-900 hover:bg-stone-700 hover:transition-all transition-all cursor-pointer rounded-md my-2 flex items-center justify-between">
    <div class="p-3 flex items-center">
        <i class="${e}"></i>
        <p class="text-sm text-gray-300">${t.title}</p>
    </div>
    <div>
        <i class="fa-solid cursor-pointer fa-trash p-2 mr-1 text-red-600 hover:bg-opacity-30 hover:transition-all transition-all hover:bg-black rounded-full"></i>
    </div>
</div>`},q=(t,e,r,n)=>{if(!Array.isArray(n))throw new Error("Invalid todos");document.querySelector(t).innerText=n.filter(s=>s.status).length,document.querySelector(e).innerText=n.filter(s=>!s.status).length,document.querySelector(r).innerText=n.length},E=t=>{window.innerWidth<=1020?iziToast.info({title:"Add Task",message:`${t}`,position:"topCenter"}):iziToast.info({title:"Add Task",message:`${t}`,position:"bottomRight"})},_=t=>{window.innerWidth<=1020?iziToast.success({title:"Change status",message:`${t}`,position:"topCenter"}):iziToast.success({title:"Change status",message:`${t}`,position:"bottomRight"})},w=t=>{window.innerWidth<=1020?iziToast.success({title:"Delete",message:`${t}`,position:"topCenter",backgroundColor:"#F06666"}):iziToast.success({title:"Delete",message:`${t}`,position:"bottomRight",backgroundColor:"#F06666"})},m={All:"all",Completed:"completed",Pending:"pending"},a={todos:[],filter:m.All},U=()=>{T()},T=()=>{if(!localStorage.getItem("state"))return;const{todos:t=[],filter:e=m.All}=JSON.parse(localStorage.getItem("state"));a.todos=t,a.filter=e},g=()=>{localStorage.setItem("state",JSON.stringify(a))},$=(t=m.All)=>{switch(t){case m.All:return[...a.todos];case m.Completed:return[...a.todos].filter(e=>e.status);case m.Pending:return[...a.todos].filter(e=>!e.status);default:throw new Error("Invalid filter: "+t)}},F=t=>{if(!t)throw new Error("Title is required");a.todos.push(new y(t,!1)),g(),_("Add Task Successfully")},P=t=>{a.todos=a.todos.map(e=>(e.id===t&&(_(e.status?"Task pending":"Task completed"),e.status=!e.status),e)),g()},N=t=>{a.todos=a.todos.filter(e=>e.id!==t),w("Delete Task Successfully"),g()},O=()=>{if(a.todos.filter(t=>t.status).length===0){E("You dont have completed tasks");return}a.todos=a.todos.filter(t=>!t.status),w("Delete Completed Tasks Successfully"),g()},z=(t=m.All)=>{a.filter=t,g()},R=()=>a.filter,c={initStore:U,loadStore:T,getTodos:$,addTodo:F,toggleTodo:P,deleteTodo:N,getCurrentFilter:R,setFilter:z,deleteCompleted:O,Filters:m},d={todoList:"#todo-list",text_input:"#task_input",btn_add:"#btn_add",error_text:"#error_text",count_done:"#count-done",count_pending:"#count-pending",count_all:"#count-all",clear_completed:"#clear-completed",task_states:"#task-states"},H=t=>{const e=()=>{const l=c.getTodos(c.getCurrentFilter());j(d.todoList,l);const u=c.getTodos(c.Filters.All);q(d.count_done,d.count_pending,d.count_all,u)},r=()=>{const l=c.getTodos(c.getCurrentFilter());let u=l[l.length-1];I(d.todoList,u)};(()=>{const l=document.createElement("div");l.innerHTML=k,document.querySelector(t).append(l),e()})();const n=document.querySelector(d.text_input),s=document.querySelector(d.btn_add),o=document.querySelector(d.error_text),p=30,x=3;n.addEventListener("keyup",l=>{n.classList.add("text-green-600"),n.value.trim().length>p||n.value.trim().length<x?n.classList.replace("text-green-600","text-red-500"):n.classList.replace("text-red-500","text-green-600")}),s.addEventListener("click",l=>{if(l.preventDefault(),n.value.trim().length>p)o.classList.remove("hidden"),o.innerText=`Task must be less than ${p} characters`;else if(n.value.trim().length<x)o.classList.remove("hidden"),o.innerText=`Task must be more than ${x} characters`;else{o.classList.add("hidden");const u=n.value.trim();c.addTodo(u),n.value="",r()}}),document.querySelector(d.todoList).addEventListener("click",l=>{const u=l.target.closest("[data_id]");if(u===null)return;let h=u.getAttribute("data_id");if(l.target.classList.contains("fa-trash")){c.deleteTodo(h),e();return}else c.toggleTodo(h),e()}),document.querySelector(d.clear_completed).addEventListener("click",l=>{c.deleteCompleted(),e()}),document.querySelector(d.task_states).addEventListener("click",l=>{let u=String(l.target.closest("[data-state]").getAttribute("data-state"));c.setFilter(u),e()})};console.log("Created By GodDoesNotPlayDice");console.log("https://github.com/GodDoesNotPlayDice");c.initStore();H("#app");
