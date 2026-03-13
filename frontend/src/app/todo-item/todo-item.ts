import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './todo-item.html',
  styleUrls: ['./todo-item.scss'],
})
export class TodoItem {

    // objeto de "estado inicial" del componente —y "fuente de verdad" para HTML
    todo = { text: 'Learn standalone components', completed: false }

    onToggle() {
        console.log('Todo toggled: ', this.todo);
    }

    onDelete() {
        console.log('Deleted todo: ', this.todo.text);
    }
}