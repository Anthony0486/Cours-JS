import { fecthJSON } from "./functions/api.js";
import { createElement } from "./functions/dom.js";
import { TodoList } from "./components/TodoList.js";

try {
    const todos2 = await fecthJSON('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const todosInStorage = localStorage.getItem('todos')?.toString();
    let todos = [];
    if (todosInStorage){
        todos = JSON.parse(todosInStorage);
    };
    const list = new TodoList(todos);
    list.appendTo(document.querySelector('#todolist'));
} catch (e){
    const alertElement = createElement('div', {
        class: 'alert alert-danger m-2',
        role: 'alert'
    });
    alertElement.innerText = 'Impossible de charger les éléments';
    document.body.prepend(alertElement);
    console.error(e);
}
// function createTask(value){
//     const li = document.createElement('li');
//     li.classList.add('todo','list-group-item', 'd-flex', 'align-items-center');
//     const checkbox = document.createElement('input');
//     checkbox.setAttribute('type', 'checkbox')
//     checkbox.classList.add('form-check-input');
//     checkbox.setAttribute('id', 'todo');
//     const label = document.createElement('label');
//     label.classList.add('ms-2', 'form-check-label');
//     label.setAttribute('id', 'todo');
//     label.setAttribute('for', 'todo');
//     label.textContent = value;
//     const labelImage = document.createElement('label');
//     labelImage.classList.add('ms-auto', 'btn', 'btn-danger', 'btn-sm');
//     const i = document.createElement('i');
//     i.classList.add('bi-trash');
//     labelImage.append(i);
//     li.append(checkbox, label, labelImage);
//     list.append(li);
// }

// createTask('test');

// function addTask(){
//     button.addEventListener('click', ()=> {
//         const value = input.value;
//         createTask(value);
//     });
// };

// addTask();

// function deleteTask(task){

// }

