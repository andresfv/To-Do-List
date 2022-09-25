import { todoList } from "..";
import { Todo } from "../classes";

// Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorraCompletados = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => {

    const htmlTodo =
        `<li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
							<label>${todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

//Eventos
txtInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && txtInput.value.length > 0) {//Si el usuario presiona enter y existe un valor en el txt
        const nuevoTodo = new Todo(txtInput.value); //Crear una nueva tarea
        todoList.nuevoTodo(nuevoTodo); //Agrega la nueva tarea a la lista en memoria
        crearTodoHtml(nuevoTodo); //Agrega la nueva tarea en la lista visual
        txtInput.value = ''; //Limpia el campo txt
    }
});

divTodoList.addEventListener('click', (event) => {


    const nombreElemento = event.target.localName; //input, label, button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if (nombreElemento.includes('input')) { //Click en el check
        todoList.marcarCompletado(todoId); //Marca como completado propiedad de la tarea según ID
        todoElemento.classList.toggle('completed'); //Añade la clase "completed" al elemento HTML
    } else if (nombreElemento.includes('button')) {

        todoList.eliminarTodo(todoId); //Elimina la tarea en memoria
        divTodoList.removeChild(todoElemento);//Elimina la tarea a nivel visual

    }
});

btnBorraCompletados.addEventListener('click', () => {
    todoList.eliminarCompletados();

    //Se usa un "for inverso" para evitar modificar el indice de los elementos al ser borrados es mejor borrarlos de atras a adelante 
    //Se usa el length de los hijos y se va restando mediante i-- y sale del for cuando el indice sea -1
    for (let i = divTodoList.children.length - 1; i >= 0; i--) {

        const elemento = divTodoList.children[i];

        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        }

    }
});

ulFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;
    if (!filtro) { return; }

    anchorFiltros.forEach(elem => elem.classList.remove('selected') );

    event.target.classList.add('selected');


    for (const elemento of divTodoList.children) {
        //Elimina clase para ocultar elementos
       elemento.classList.remove('hidden');
       //Añade elemento que contenga clase completed
       const completado = elemento.classList.contains('completed');

       switch (filtro) {
        case 'Pendientes':
            if (completado) {
                elemento.classList.add('hidden');
            }
            break;

        case 'Completados':
            if (!completado) {
                elemento.classList.add('hidden');
            }
            break;
       
        default:
            break;
       }

    }
})