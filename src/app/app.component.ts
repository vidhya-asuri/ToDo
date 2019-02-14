import { Component } from '@angular/core';
import {ToDoDataService} from './to-do-data.service';
import {Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ToDoDataService]
})
export class AppComponent {
  newTodo: Todo = new Todo();
  constructor(private todoDataService: ToDoDataService)
  {

  }
  addTodo() {
    this.todoDataService.addToDo(this.newTodo);
    this.newTodo = new Todo();
  }
  
  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }


  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }
  title = 'ToDo';
}
