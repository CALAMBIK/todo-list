import { LocalStorageApi } from './../../localStorage.service';
import { Component, inject } from '@angular/core';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { TodoFacade } from '../+state/todo.facade';
import { TodoListCardComponent } from '../todo-list-card/todo-list-card.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FilterName, Task } from '../todo.interface';
import { map } from 'rxjs';
import { TodoFilterComponent } from '../todo-filter/todo-filter.component';

@Component({
  selector: 'app-todo-list-container',
  standalone: true,
  imports: [
    TodoAddComponent,
    TodoListCardComponent,
    AsyncPipe,
    NgFor,
    TodoFilterComponent,
  ],
  templateUrl: './todo-list-container.component.html',
  styleUrl: './todo-list-container.component.scss',
})
export class TodoListContainerComponent {
  private readonly todoFacade = inject(TodoFacade);
  private readonly localStorageApi = inject(LocalStorageApi);
  public readonly tasks$ = this.todoFacade.tasks$;
  public readonly filteredTasks$ = this.todoFacade.filteredTasks$;
  public readonly countTodosLeft$ = this.tasks$.pipe(
    map((tasks) => tasks.filter((task) => task.status).length)
  );

  constructor() {
    let storageData = this.localStorageApi.getItem();
    if (storageData) {
      let parsedData: Task[] = JSON.parse(storageData);
      this.todoFacade.setTasks(parsedData);
    }
  }

  public addTask(text: string) {
    this.todoFacade.addTask({ id: Date.now(), text: text, status: false });
    this.localStorageApi.addItem({ id: Date.now(), text: text, status: false });
  }
  public deleteTask(task: Task) {
    this.todoFacade.deleteTask(task.id);
    this.localStorageApi.removeItem(task.id);
  }
  public editTask(task: Task) {
    this.todoFacade.editTask(task);
    this.localStorageApi.editItem(task);
  }
  public changeTaskStatus(task: Task) {
    this.todoFacade.changeTaskStatus(task);
    this.localStorageApi.changeStatusItem(task);
  }
  public filterAll() {
    this.todoFacade.filterTasks(FilterName.All);
  }

  public filterActive() {
    this.todoFacade.filterTasks(FilterName.Active);
  }

  public filterComplited() {
    this.todoFacade.filterTasks(FilterName.Complited);
  }
}
