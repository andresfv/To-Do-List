export class Todo {

    //Constructor que reconstruye un "to do" desde un json ya que los objetos guardados 
    //de esta forma pierden sus métodos.
    //Se usa destrocturación de objetos para facilitar la labor
    static fromJson({ id, tarea, completado, creado }) {

        const tempTodo = new Todo(tarea);

        tempTodo.id = id;
        tempTodo.tarea = tarea;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor(tarea) {

        this.tarea = tarea;

        this.id = new Date().getTime(); //Va a permitir obtener ids basados en los milisegundos actuales.
        this.completado = false;
        this.creado = new Date();

    }

}