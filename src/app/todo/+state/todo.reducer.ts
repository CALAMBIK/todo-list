import { Task, FilterName } from '../todo.interface';
import * as TodoActions from './todo.actions';
import { createReducer, on } from '@ngrx/store';
export const initialTodoState: { tasks: Task[]; filter: string } = {
  tasks: [],
  filter: FilterName.All,
};

export const todoReducer = createReducer(
  initialTodoState,
  on(TodoActions.addTask, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task],
  })),
  on(TodoActions.deleteTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== id),
  })),
  on(TodoActions.editTask, (state, payload) => ({
    ...state,
    tasks: state.tasks.map((task) =>
      task.id === payload.task.id ? payload.task : task
    ),
  })),
  on(TodoActions.changeTaskStatus, (state, { id }) => ({
    ...state,
    tasks: state.tasks.map((task) =>
      task.id === id ? { ...task, status: !task.status } : task
    ),
  })),
  on(TodoActions.setTasks, (state, { tasks }) => ({
    ...state,
    tasks: tasks,
  })),
  on(TodoActions.filterTasks, (state, { nameFilter }) => ({
    ...state,
    filter: nameFilter,
  }))
);
