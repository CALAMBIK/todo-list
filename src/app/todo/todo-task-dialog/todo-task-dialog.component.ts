import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Task } from '../todo.interface';

@Component({
  selector: 'app-todo-task-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule,
  ],
  templateUrl: './todo-task-dialog.component.html',
  styleUrl: './todo-task-dialog.component.scss',
})
export class TodoTaskDialogComponent {
  readonly dialogRef = inject(MatDialogRef<TodoTaskDialogComponent>);
  readonly data = inject<{ task: Task }>(MAT_DIALOG_DATA);
  readonly text = new FormControl(this.data.task?.text);

  public get taskData(): Task {
    return {
      id: this.data.task.id,
      text: this.text.value || '',
      status: this.data.task.status,
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
