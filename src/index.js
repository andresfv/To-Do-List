import './styles.css';

import { Todo, TodoList } from './classes';//Si no se define un nombre de clase a importar se toma el index por defecto
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

const tarea = new Todo('Aprender Javascript');

todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea);