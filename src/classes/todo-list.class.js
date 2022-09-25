import { Todo } from "./todo.class";


export class TodoList {

    constructor() {
        // this.todos = [];

        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id); //Duevelve una lista sin el elemento enviado en parámetros
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;//Cambia valor completado entre true o false
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado); //Duevelve una lista sin los todo completados
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        // localStorage.setItem('todo', this.todos);
        // JSON.stringify tranforma un objeto a un json perfecto
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    // cargarLocalStorage() {
    //     if (localStorage.getItem('todo')) {
    //         this.todos = JSON.parse( localStorage.getItem('todo') );
    //     } else {
    //         this.todos = [];
    //     }
    // }

    //Version simplificada
    cargarLocalStorage() {
        this.todos = localStorage.getItem('todo')
            ? JSON.parse(localStorage.getItem('todo'))
            : [];

        // this.todos = this.todos.map( obj => Todo.fromJson( obj ) );
        
        //Aún más simplificado
        this.todos = this.todos.map( Todo.fromJson );
    }
}