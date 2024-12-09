import * as TodoActions from './todo.actions';
import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as UsersSelectors from './todo.selectors';
import { FilterName, Task } from '../todo.interface';

@Injectable({ providedIn: 'root' })
export class TodoFacade {
  private readonly store = inject(Store);
  public readonly tasks$ = this.store.pipe(select(UsersSelectors.selectTask));
  public readonly filteredTasks$ = this.store.pipe(
    select(UsersSelectors.selectFiltered)
  );

  public addTask(task: Task) {
    this.store.dispatch(TodoActions.addTask({ task }));
  }

  public deleteTask(id: number) {
    this.store.dispatch(TodoActions.deleteTask({ id }));
  }

  public editTask(task: Task) {
    this.store.dispatch(TodoActions.editTask({ task }));
  }

  public changeTaskStatus(task: Task) {
    this.store.dispatch(TodoActions.changeTaskStatus({ id: task.id }));
  }

  public setTasks(tasks: Task[]) {
    this.store.dispatch(TodoActions.setTasks({ tasks }));
  }

  public filterTasks(nameFilter: FilterName) {
    this.store.dispatch(TodoActions.filterTasks({ nameFilter }));
  }
}
