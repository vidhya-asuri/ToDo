import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import {ToDoDataService} from '../to-do-data-service';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {
  newTodo: Todo = new Todo();

  constructor(private to-do-data-service: ToDoDataService) { }
   
  addTodo(todo: Todo) {
     this.to-do-data-service = this.to-do-data-service.addToDo(todo);
  }
   
  ngOnInit() {
  }

}
