

export class TodoList {

    constructor() {
        this.todos = [];
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
    }

    eliminarTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id); //Duevelve una lista sin el elemento enviado en parámetros

    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.marcarCompletado = !todo.completado;//Cambia valor completado entre true o false
                break;
            }
        }

    }

    eliminarCompletados() {

    }
}