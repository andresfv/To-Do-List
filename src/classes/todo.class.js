export class Todo {

    constructor(tarea) {

        this.tarea = tarea;

        this.id = new Date().getTime(); //Va a permitir obtener ids basados en los milisegundos actuales.
        this.completado = false;
        this.creado = new Date();

    }

}