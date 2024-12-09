import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { merge } from 'rxjs';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoAddComponent {
  @Output() addTask = new EventEmitter();

  readonly text = new FormControl('');

  public onAddTask() {
    if (this.text.value === '') {
      return;
    }
    let newText = this.text.value;
    this.addTask.emit(newText);
    this.text.setValue('');
  }
}
