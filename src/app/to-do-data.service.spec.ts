import {TestBed, async, inject} from '@angular/core/testing';
import { ToDoDataService } from './to-do-data.service';
import {Todo} from './todo';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

describe('ToDoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  imports: [FormsModule],
  providers: [ToDoDataService]
  }));

  it('should be created', () => {
    const service: ToDoDataService = TestBed.get(ToDoDataService);
    expect(service).toBeTruthy();
  });

  it('should ...', inject([ToDoDataService], (service: ToDoDataService) => {
	expect(service).toBeTruthy();
  }));

});

describe('#getAllTodos()', () => {

    it('should return an empty array by default', inject([ToDoDataService], (service: ToDoDataService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should return all todos', inject([ToDoDataService], (service: ToDoDataService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addToDo(todo1);
      service.addToDo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));

});


describe('#create(todo)', () => {

    it('should automatically assign an incrementing id', inject([ToDoDataService], (service: ToDoDataService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addToDo(todo1);
      service.addToDo(todo2);
      expect(service.getTodoById(1)).toEqual(todo1);
      expect(service.getTodoById(2)).toEqual(todo2);
    }));

});


describe('#deleteTodoById(id)', () => {

    it('should remove todo with the corresponding id', inject([ToDoDataService], (service: ToDoDataService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addToDo(todo1);
      service.addToDo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoById(2);
      expect(service.getAllTodos()).toEqual([]);
    }));

});

describe('#updateTodoById(id, values)', () => {

    it('should return todo with the corresponding id and updated data', inject([ToDoDataService], (service: ToDoDataService) => {
      let todo = new Todo({title: 'Hello 1', complete: false});
      service.addToDo(todo);
      let updatedTodo = service.updateTodoById(1, {
        title: 'new title'
      });
      expect(updatedTodo.title).toEqual('new title');
    }));

    it('should return null if todo is not found', inject([ToDoDataService], (service: ToDoDataService) => {
      let todo = new Todo({title: 'Hello 1', complete: false});
      service.addToDo(todo);
      let updatedTodo = service.updateTodoById(2, {
        title: 'new title'
      });
      expect(updatedTodo).toEqual(null);
    }));

});

describe('#toggleTodoComplete(todo)', () => {

    it('should return the updated todo with inverse complete status', inject([ToDoDataService], (service: ToDoDataService) => {
      let todo = new Todo({title: 'Hello 1', complete: false});
      service.addToDo(todo);
      let updatedTodo = service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toEqual(true);
      service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toEqual(false);
    }));

});


describe('#deleteTodoById(id)', () => {

    it('should remove todo with the corresponding id', inject([ToDoDataService], (service: ToDoDataService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addToDo(todo1);
      service.addToDo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoById(2);
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([ToDoDataService], (service: ToDoDataService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addToDo(todo1);
      service.addToDo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(3);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));

});











