import { createAction, props } from '@ngrx/store';
import { Task } from '../todo.interface';

export const addTask = createAction(
  '[Todos Page] Add Task',
  props<{ task: Task }>()
);

export const editTask = createAction(
  '[Todos Page] Edit Task',
  props<{ task: Task }>()
);

export const deleteTask = createAction(
  '[Todos Page] Delete Task',
  props<{ id: number }>()
);

export const changeTaskStatus = createAction(
  '[Todos Page] Change Task Status',
  props<{ id: number }>()
);

export const setTasks = createAction(
  '[Todos Page] Set Tasks',
  props<{ tasks: Task[] }>()
);

export const filterTasks = createAction(
  '[Todos Page] Filter Tasks',
  props<{ nameFilter: string }>()
);
