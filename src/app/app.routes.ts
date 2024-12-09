import { Routes } from '@angular/router';
import { TodoListContainerComponent } from './todo/todo-list-container/todo-list-container.component';

export const routes: Routes = [
  {
    path: '',
    component: TodoListContainerComponent,
  },
];
