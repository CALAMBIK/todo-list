import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Task } from '../todo.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { TodoTaskDialogComponent } from '../todo-task-dialog/todo-task-dialog.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-list-card',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgClass,
  ],
  templateUrl: './todo-list-card.component.html',
  styleUrl: './todo-list-card.component.scss',
})
export class TodoListCardComponent {
  @Input() task?: Task;
  @Output() deleteTask = new EventEmitter();
  @Output() editTask = new EventEmitter();
  @Output() changeTaskStatus = new EventEmitter();

  public onDeleteTask() {
    this.deleteTask.emit(this.task);
  }

  public onChangeTaskStatus() {
    this.changeTaskStatus.emit(this.task);
  }

  readonly dialog = inject(MatDialog);

  public openDialog(): void {
    const dialogRef = this.dialog.open(TodoTaskDialogComponent, {
      data: { task: this.task },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined || result !== '') {
        this.editTask.emit(result);
      }
    });
  }
}
