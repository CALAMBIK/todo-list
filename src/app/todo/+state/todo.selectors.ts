import { createSelector } from '@ngrx/store';
import { FilterName, Task } from '../todo.interface';

interface TasksState {
  tasks: Task[];
  filter: string;
}

interface AppState {
  tasks: TasksState;
}

export const selectTaskFeature = (state: AppState) => state.tasks;

export const selectTask = createSelector(
  selectTaskFeature,
  (state) => state.tasks
);

export const selectFilter = createSelector(
  selectTaskFeature,
  (state) => state.filter
);

export const selectFiltered = createSelector(
  selectTask,
  selectFilter,
  (tasks, filtered) => {
    if (filtered === FilterName.All) {
      return tasks;
    } else if (filtered === FilterName.Active) {
      return tasks.filter((task) => !task.status);
    } else if (filtered === FilterName.Complited) {
      return tasks.filter((task) => task.status);
    }
    return [];
  }
);
