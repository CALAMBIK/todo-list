import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-todo-filter',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './todo-filter.component.html',
  styleUrl: './todo-filter.component.scss',
})
export class TodoFilterComponent {
  @Output() filterAll = new EventEmitter();
  @Output() filterActive = new EventEmitter();
  @Output() filterComplited = new EventEmitter();

  public onFilterAll() {
    this.filterAll.emit();
  }
  public onFilterActive() {
    this.filterActive.emit();
  }
  public onFilterComplited() {
    this.filterComplited.emit();
  }
}
