import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import {ToDoDataService} from '../to-do-data.service';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {
  newTodo: Todo = new Todo();

  constructor(private toDoDataService: ToDoDataService) { }
   
  addTodo(todo: Todo) {
     this.toDoDataService = this.toDoDataService.addToDo(todo);
  }
   
  ngOnInit() {
  }

}
