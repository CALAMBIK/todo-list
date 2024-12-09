import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { todoReducer } from './todo/+state/todo.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({ tasks: todoReducer })],
};
