import './styles.css';

import { Todo, TodoList } from './classes';//Si no se define un nombre de clase a importar se toma el index por defecto
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();


// Agrega un elemento en la vista por cada valor en la variable "todoList"
// todoList.todos.forEach(todo => {crearTodoHtml( todo )});
// Version simplificada solo cuando es un solo argumento
todoList.todos.forEach( crearTodoHtml );

// const tarea = new Todo('Aprender Javascript');
// todoList.nuevoTodo(tarea);
// console.log(todoList);

// crearTodoHtml(tarea);

// localStorage.setItem('miKey', 'ABC123'); //Almacena en el local storage, este es por dominio
// sessionStorage.setItem('miKey', 'ABC123'); //Almacena en el storage se la sesion del navegador

// setTimeout( ()=>{
// localStorage.removeItem('miKey');
// }, 1500);